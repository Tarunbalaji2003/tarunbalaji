import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://github.com/Tarunbalaji2003">Primary link</Link>
    <Link secondary href="https://github.com/Tarunbalaji2003">
      Secondary link
    </Link>
  </StoryContainer>
);
