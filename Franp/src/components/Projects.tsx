import { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import your images from /src/assets
import Assistant1 from '../assets/project1/Assistant1.png';
import Assistant3 from '../assets/project1/Assistant3.png';
import Assistant4 from '../assets/project1/Assistant4.png';

import Eidolon1 from '../assets/project2/Eidolon1.png';
import Eidolon2 from '../assets/project2/Eidolon2.png';

import Hal1 from '../assets/project3/Hal1.png';

function Projects() {
  const [activeSection, setActiveSection] = useState('first');

  const projectSections = [
    {
      id: 'first',
      title: 'Eidolon - Webapp',
      heading: 'AI Personal Assistant',
      content: 'stuff',
      slides: [Assistant1, Assistant3, Assistant4],
    },
    {
      id: 'second',
      title: 'Eidolon - Desktop App',
      heading: 'Local AI Inference Engine',
      content: 'stuff',
      slides: [Eidolon1, Eidolon2],
    },
    {
      id: 'third',
      title: 'HalGPT',
      heading: 'HAL9000 Voice Synthesis',
      content: 'stuff',
      slides: [Hal1],
    },
  ];

  const activeContent = projectSections.find(section => section.id === activeSection);

  return (
    <section className="project-section">
      <div className="project-sidebar">
        {projectSections.map(section => (
          <div
            key={section.id}
            className={`project-sidebar-item ${
              activeSection === section.id ? 'project-sidebar-active' : ''
            }`}
            onClick={() => setActiveSection(section.id)}
            onMouseEnter={() => setActiveSection(section.id)}
          >
            {section.title}
          </div>
        ))}
      </div>

      <div className="project-section-text">
        <h1>{activeContent?.heading}</h1>
        <p>{activeContent?.content}</p>

        {/* Medium-sized centered carousel */}
        <div className="project-carousel">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            loop={activeContent.slides.length > 1}
          >
            {activeContent.slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="project-slide">
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;
