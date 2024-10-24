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

const title = 'Real-Time License Plate Recongistion System  Powered by NVIDIA DeepStream: Scalable, Fast, and Accurate';
const description =
  'I worked as the lead developer on a major project using NVIDIA DeepStream to build a real-time license plate detection system. We took the solution in an innovative direction by leveraging the power of DeepStream for efficient video analytics and object detection. The system was designed to be deployed on edge devices for real-time processing and analysis.';
const roles = [
  'System Architecture and Design',
   'DeepStream Model Development',
'Computer Vision and AI Integration',
'Real-time Data Processing Optimization',
' Edge Computing Deployment',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
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
          url="https://github.com/Tarunbalaji2003/Deepstream_Number-plate"
          roles={roles}
        />
        
          

  

          
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
            With the increasing demand for efficient vehicle monitoring and security, traditional license plate recognition systems struggle to handle high-volume, real-time data processing, leading to delays, inaccuracies, and limited scalability. Existing solutions often lack the computational power to analyze multiple video streams simultaneously while ensuring precise detection and recognition of license plates. There is a need for a scalable, real-time system that can process live video feeds with high accuracy, handle large datasets, and be easily deployable on edge devices or in the cloud for wide-scale implementation.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                  : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
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
              <ProjectSectionHeading>The system Design</ProjectSectionHeading>
              <ProjectSectionText>
              The NVIDIA DeepStream-based license plate detection system is designed for real-time vehicle monitoring using live video feeds. Leveraging advanced computer vision and GPU acceleration, the system detects vehicles and reads license plates efficiently through a DeepStream pipeline and optimized inference engine. It supports scalable deployment on edge devices or the cloud, offering high-performance detection with integrated data storage, alerting, and reporting capabilities. The below image is souced from offical documentation.
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
                  ? `${imageSprDesignSystemDark} 1180w, ${imageSprDesignSystemDarkLarge} 2000w`
                  : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Solution</ProjectSectionHeading>
              <ProjectSectionText>
              Our NVIDIA DeepStream-based license plate detection system addresses the challenges of real-time vehicle monitoring with cutting-edge technology. By leveraging GPU-accelerated video analytics, our solution enables rapid and accurate detection of license plates from live video streams, ensuring high performance even with large datasets. With support for scalable deployment on edge devices and cloud platforms, our system integrates seamlessly into various security and traffic management infrastructures, offering real-time alerts, data storage, and comprehensive reporting for enhanced operational efficiency.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
            <ProjectSectionHeading>Techstack</ProjectSectionHeading>
              <ProjectSectionText> <ol>
        <li>
          <strong>NVIDIA DeepStream SDK:</strong> Utilized for real-time video analytics and GPU-accelerated processing of video streams.
        </li>
        <li>
          <strong>TensorRT:</strong> Employed for optimized model inference, enhancing the performance of object detection and recognition.
        </li>
        <li>
          <strong>Optical Character Recognition (OCR):</strong> Integrated for accurate extraction and interpretation of license plate characters.
        </li>
        <li>
          <strong>Python:</strong> Used for scripting and integrating various components of the system.
        </li>
        <li>
          <strong>Docker:</strong> Implemented for containerization, ensuring consistent deployment across different environments.
        </li>
        <li>
          <strong>CUDA:</strong> Leveraged for parallel computing and accelerating GPU-based tasks.
        </li>
        <li>
          <strong>Cloud Services AWS:</strong> Optional for scalable storage and processing capabilities.
        </li>
        
       
      </ol></ProjectSectionText>
              </ProjectTextRow>


              <ProjectTextRow>
            <ProjectSectionHeading>Get in Touch</ProjectSectionHeading>
              <ProjectSectionText>
              <p>If you’re interested in learning more about our license plate detection solution or would like to schedule a demo, here’s how you can reach out:</p>
              
      <ul>
        <li>
          <strong>Request a Demo:</strong> Contact us to arrange a personalized demonstration of the system’s capabilities.
        </li>
        <li>
          <strong>Contact Us:</strong> Send us an email at <a href="mailto:tarunbalaji170703@gmail.com">tarunbalaji170703@gmail.com</a> for inquiries or further information.
        </li>
        <li>
          <strong>Follow Us:</strong> Stay updated with our latest developments on  <a href="www.linkedin.com/in/tarunbalaji">LinkedIn</a>.
        </li>
      </ul>
              </ProjectSectionText>
              </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
         
            
        </ThemeProvider>
       
      
        
                   
      </ProjectContainer>
      <Footer />
    </>
  );
};
