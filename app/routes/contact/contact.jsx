import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact.module.css';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export const meta = () => {
  return [
    {
      title: 'Contact',
    },
    {
      name: 'description',
      content: 'Send me a message if you’re interested in discussing a project or if you just want to say hi',
    }
  ];
};

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const [actionData, setActionData] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    const emailValue = email.value;
    const messageValue = message.value;
    const errors = {};

    if (!emailValue || !EMAIL_PATTERN.test(emailValue)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!messageValue) {
      errors.message = 'Please enter a message.';
    }

    if (emailValue.length > MAX_EMAIL_LENGTH) {
      errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (messageValue.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (Object.keys(errors).length > 0) {
      setActionData({ errors });
      setSending(false);
      return;
    }

   
    emailjs
      .send(
        'service_kf9fo3d', 
        'template_nh0zuvc', 
        {
          from_name: emailValue,
          message: messageValue,
        },
        'ap_dt1Z_0-_sKfc56' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setActionData({ success: true });
        },
        (error) => {
          console.error(error.text);
          setActionData({ errors: { message: 'Failed to send message. Please try again later.' } });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form className={styles.form} method="post" ref={nodeRef} onSubmit={handleSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            {actionData?.errors && (
              <div className={styles.formError} ref={errorRef}>
                <div className={styles.formErrorContent}>
                  <div className={styles.formErrorMessage}>
                    <Icon className={styles.formErrorIcon} icon="error" />
                    {actionData?.errors?.email}
                    {actionData?.errors?.message}
                  </div>
                </div>
              </div>
            )}
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};
function msToNum(ms) {
  return parseFloat(ms.replace('ms', ''));
}

function numToMs(num) {
  return `${num}ms`;
}
function cssProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    acc[key] = props[key];
    return acc;
  }, {});
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}