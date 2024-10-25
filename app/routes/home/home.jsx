
import sprTextureLarge from '~/assets/license-plate-output.png';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/license-plate-output.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import alertmail from '~/assets/alertmail.jpg';
import jenkinsstage from '~/assets/jenkinsstage.jpg';
import alertmanager from '~/assets/alertmanager.jpg'
// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: ' Developer',
    description: `Design portfolio of ${config.name} — a DevSecOps engineer.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

 {/* useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');
    
    if (scrollContainer) {
      const handleScroll = (evt) => {
        evt.preventDefault(); // Prevent the default vertical scroll
        scrollContainer.scrollLeft += evt.deltaY; // Apply vertical scroll as horizontal
      };
      
      scrollContainer.addEventListener('wheel', handleScroll);
      
      return () => {
        scrollContainer.removeEventListener('wheel', handleScroll); // Clean up event listener
      };
    }
  }, []); // Empty dependency array ensures this runs once when component mounts
  
 */}

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      
        <ProjectSummary
          
          id="project-1"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="Real-Time License Plate Detection Redefined"
          description="Delivers real-time, high-accuracy license plate detection with scalable deployment and instant alerts"
          buttonText="View project"
          buttonLink="/projects/numberplate"
          model={{
            type: 'laptop',
            alt: 'Demo',
            textures: [
              {
                srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
                placeholder: sprTexturePlaceholder,
              },
            ],
          }}
        />

        <ProjectSummary
        
          id="project-2"
          alternate
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="Prometheus Alert Manager"
          description="Configuration and development of a system using Prometheus to monitor metrics and send alerts via email."
          buttonText="Click for Github link"
          buttonLink=""
          model={{
            type: 'phone',
            alt: 'App login screen',
            textures: [
              {
                srcSet: `${alertmanager} 375w, ${alertmanager} 750w`,
                placeholder: alertmanager,
              },
              {
                srcSet: `${alertmail} 375w, ${alertmail} 750w`,
                placeholder: alertmail,
              },
            ],
          }}  
        />


        <ProjectSummary
          
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Automated Deployment with Jenkins"
          description="Streamlining CI/CD processes with Jenkins, SonarQube, Docker, and Nexus for efficient code deployment and artifact management."
          buttonText="View project"
          buttonLink="/projects/jenkins"
          model={{
            type: 'laptop',
            alt: 'Jenkins pipeline stages for automated deployment',
            textures: [
              {
                srcSet: `${jenkinsstage} 800w, ${jenkinsstage} 1920w`,
                placeholder: jenkinsstage,
              },
            ],
          }}
        />
    
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
