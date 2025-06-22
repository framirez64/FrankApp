import { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Image imports
import Assistant1 from '../assets/project1/Assistant1.png';
import Assistant2 from '../assets/project1/Assistant2.png';
import Assistant3 from '../assets/project1/Assistant3.png';
import Assistant4 from '../assets/project1/Assistant4.png';

import Eidolon1 from '../assets/project2/Eidolon1.png';
import Eidolon2 from '../assets/project2/Eidolon2.png';

import Hal1 from '../assets/project3/Hal1.png';

function Projects() {
  const [activeSection, setActiveSection] = useState('first');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projectSections = [
    {
      id: 'first',
      title: 'Eidolon - Webapp',
      heading: 'AI Personal Assistant',
      content: 'stuff',
      slides: [Assistant1, Assistant2, Assistant3, Assistant4],
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
      content: 'HalGPT was one of the first projects I made, I was inspired after watching 2001: A Space Oddysey. I found the voice chosen for HAL soothing and cool to listen to. I compiled all the voicelines from the movie and utilizing an open-source project called PiperTTS, I was able to clone the voice and train a model for speech syntehsis. I learned a lot about audio cleaning and voice transcribing along with being able to leverage the GPU acceleration library CUDA.',
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
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    onClick={() => setModalImage(src)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p>{activeContent?.content}</p>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="project-modal" onClick={() => setModalImage(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged" />
            <button className="project-modal-close" onClick={() => setModalImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
