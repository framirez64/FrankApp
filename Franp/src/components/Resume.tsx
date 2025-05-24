import { useState } from 'react'
import './Resume.css'
function Resume() {
  const [activeSection, setActiveSection] = useState<'intro' | 'languages' | 'frontend'| 'backend' | 'devops' | 'ai'>('intro')

  const aboutContent = {
    intro: {
      text: (
        <>
          <h1>About Me</h1>
          <p>Hello! My name is Francisco, but I typically go by Frank. I'm originally from México but I moved to Omaha, Nebraska when I was 6. I'm fluent in English and Spanish, and I'm trying to learn other languages like French and German.</p>
          <p>I'm a recent computer science graduate with a strong foundation in software engineering and a growing focus on AI integration. During my academic and project work, I developed full-stack applications, explored machine learning workflows, and learned how to connect intelligent systems to real-world software products. I enjoy building things that are not just functional, but smart—leveraging tools like APIs, LLMs, and automation frameworks to create efficient, user-friendly experiences. I'm eager to keep exploring ways to optimize workflows and assist growing businesses.</p>
        </>
      )
    },
    languages: {
      text: (
        <>
          <h1>About Me</h1>
          <p>Hello! My name is Francisco, but I typically go by Frank. I'm originally from México but I moved to Omaha, Nebraska when I was 6. I'm fluent in English and Spanish, and I'm trying to learn other languages like French and German.</p>
          <p>I'm a recent computer science graduate with a strong foundation in software engineering and a growing focus on AI integration. During my academic and project work, I developed full-stack applications, explored machine learning workflows, and learned how to connect intelligent systems to real-world software products. I enjoy building things that are not just functional, but smart—leveraging tools like APIs, LLMs, and automation frameworks to create efficient, user-friendly experiences. I'm eager to keep exploring ways to optimize workflows and assist growing businesses.</p>
        </>
      )
    },
    frontend: {
      text: (
        <>
          <h1>Education</h1>
          <p>Having grown up in Omaha, I consider myself lucky to have been a student at, what I consider, world-class institutions. I graduated in May 2025 from the University of Nebraska-Omaha with a Bachelor's degree of Science majoring in Computer Science with a concentration in Artificial Intelligence.</p>
          <p>In 2021, I graduated from Omaha Central High School and I’m proud to call myself not only a Maverick but an Eagle too. Along with my high school diploma, I also received the International Baccalaureate diploma from having been part of Central's IB program. </p>
          <p>Additionally, I was fortunate enough to be a recipient of the Susan T. Buffett Scholarship and the Jepsen Scholarship. </p>
        </>
      )
    },
    backend: {
      text: (
        <>
          <h1>Interests</h1>
          <p>I have lots of hobbies. Recently, I've become more active and enjoy rock climbing along with working out regularly. When I'm not working on personal projects, I enjoy reading; lately I've been reading more about recent developments in AI and theoretical applications for certain AI approaches.</p>
          <p>What I enjoy outside of coding...</p>
        </>
      )
    },
    devops: {
      text: (
        <>
          <h1>Interests</h1>
          <p>I have lots of hobbies. Recently, I've become more active and enjoy rock climbing along with working out regularly. When I'm not working on personal projects, I enjoy reading; lately I've been reading more about recent developments in AI and theoretical applications for certain AI approaches.</p>
          <p>What I enjoy outside of coding...</p>
        </>
      )
    },
    ai: {
      text: (
        <>
          <h1>Interests</h1>
          <p>I have lots of hobbies. Recently, I've become more active and enjoy rock climbing along with working out regularly. When I'm not working on personal projects, I enjoy reading; lately I've been reading more about recent developments in AI and theoretical applications for certain AI approaches.</p>
          <p>What I enjoy outside of coding...</p>
        </>
      )
    }
  }

  return (
    <section className="about-section">
      <div className="about-sidebar">
        <div 
          className={`about-sidebar-item ${activeSection === 'intro' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('intro')}
          onMouseEnter={() => setActiveSection('intro')}
        >
          Intro
        </div>
        <div 
          className={`about-sidebar-item ${activeSection === 'languages' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('languages')}
          onMouseEnter={() => setActiveSection('languages')}
        >
          Languages
        </div>
        <div 
          className={`about-sidebar-item ${activeSection === 'frontend' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('frontend')}
          onMouseEnter={() => setActiveSection('frontend')}
        >
          Frontend
        </div>
        <div 
          className={`about-sidebar-item ${activeSection === 'backend' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('backend')}
          onMouseEnter={() => setActiveSection('backend')}
        >
          Backend
        </div>
        <div 
          className={`about-sidebar-item ${activeSection === 'devops' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('devops')}
          onMouseEnter={() => setActiveSection('devops')}
        >
          Devops
        </div>
        <div 
          className={`about-sidebar-item ${activeSection === 'ai' ? 'about-sidebar-active' : ''}`}
          onClick={() => setActiveSection('ai')}
          onMouseEnter={() => setActiveSection('ai')}
        >
          AI
        </div>
      </div>
      
      <div className="about-section-text">
        {aboutContent[activeSection].text}
      </div>
    </section>
  )
}

export default Resume