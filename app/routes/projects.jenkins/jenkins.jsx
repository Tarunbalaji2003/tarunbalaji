import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/license-plate-output.png';
import imageSprComponentsDarkPlaceholder from '~/assets/license-plate-output.png';
import imageSprComponentsDark from '~/assets/license-plate-output.png';
import imageSprComponentsLightLarge from '~/assets/license-plate-output.png';
import imageSprComponentsLightPlaceholder from '~/assets/license-plate-output.png';
import imageSprComponentsLight from '~/assets/license-plate-output.png';
import imageSprDesignSystemDarkLarge from '~/assets/deepstream-flow.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/deepstream-flow.png';
import imageSprDesignSystemLightLarge from '~/assets/deepstream-flow.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/deepstream-flow.png';
import imageSprDesignSystemLight from '~/assets/deepstream-flow.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import jenkinspipeline from '~/assets/jenkinspiepline.jpg';
import jenkinsstage from '~/assets/jenkinsstage.jpg';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Automated Deployment with Jenkins: Streamlining CI/CD Processes';
const description =
  'As the lead developer, I spearheaded the integration of Jenkins into our CI/CD pipeline, facilitating seamless code deployment, automated testing, and artifact management. This system enhances our development workflow, ensuring high-quality code delivery with minimal manual intervention.';

const roles = [
  'CI/CD Pipeline Design and Implementation',
  'Jenkins Integration for Automated Deployments',
  'Code Quality Assurance through SonarQube',
  'Docker Containerization for Application Deployment',
  'Nexus Artifact Management for Efficient Storage',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const jenkins = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = (index) => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Tarunbalaji2003"
          roles={roles}
        />

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              In today’s fast-paced development environment, manually deploying code and managing releases can lead to delays, inconsistencies, and increased risk of errors. The challenge was to create a robust CI/CD pipeline that automates the build, testing, and deployment processes to enhance efficiency and maintain high-quality standards.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${jenkinspipeline} 1024w, ${jenkinspipeline} 2048w`
                  : `${jenkinspipeline} 1024w, ${jenkinspipeline} 2048w`
              }
              width={1024}
              height={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt="CI/CD Pipeline Overview"
              sizes="100vw"
            />

            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Pipeline Design</ProjectSectionHeading>
              <ProjectSectionText>
                Our CI/CD pipeline integrates Jenkins for continuous integration and delivery, allowing for automatic builds and deployments upon code commits. The pipeline includes automated testing to ensure code quality and stability before deploying to production environments.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${jenkinsstage} 1180w, ${jenkinsstage} 2000w`
                  : `${jenkinsstage} 1280w, ${jenkinsstage} 2560w`
              }
              width={1280}
              height={800}
              placeholder={isDark ? jenkinsstage : jenkinsstage}
              alt="Jenkins Pipeline Diagram"
              sizes="100vw"
            />

            <ProjectTextRow>
              <ProjectSectionHeading>Our Solution</ProjectSectionHeading>
              <ProjectSectionText>
                By utilizing Jenkins, we automate the process of building, testing, and deploying our applications. This not only saves time but also ensures that every piece of code is thoroughly tested and vetted before going live. The integration with SonarQube helps maintain high code quality standards, while Docker allows us to package applications consistently across environments. Finally, Nexus acts as a repository for managing our artifacts efficiently.
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
              <ProjectSectionText>
                <ol>
                  <li><strong>Jenkins:</strong> Used for automating the CI/CD process.</li>
                  <li><strong>SonarQube:</strong> Integrated for continuous code quality inspection.</li>
                  <li><strong>Docker:</strong> Employed for containerization of applications.</li>
                  <li><strong>Nexus:</strong> Used for artifact management and storage.</li>
                  <li><strong>Git:</strong> Version control for managing source code.</li>
                  <li><strong>AWS:</strong> Optional cloud services for scalable deployments.</li>
                </ol>
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Get in Touch</ProjectSectionHeading>
              <ProjectSectionText>
                <p>If you’re interested in learning more about our automated deployment processes or would like to schedule a demo, here’s how you can reach out:</p>
                <ul>
                  <li><strong>Request a Demo:</strong> Contact us to arrange a personalized demonstration of our CI/CD capabilities.</li>
                  <li><strong>Contact Us:</strong> Send us an email at <a href="mailto:tarunbalaji170703@gmail.com">tarunbalaji170703@gmail.com</a> for inquiries or further information.</li>
                  <li><strong>Follow Us:</strong> Stay updated with our latest developments on <a href="https://www.linkedin.com/in/tarunbalaji">LinkedIn</a>.</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert />
      </ProjectContainer>
      <Footer />
    </>
  );
};
