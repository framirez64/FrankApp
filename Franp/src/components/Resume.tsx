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
          <h1>Languages I know</h1>
          <p>I'm most experienced in Python, which I've used extensively throughout my undergraduate education for both web applications and AI-focused projects. I'm also comfortable working with lower-level languages like C, as well as object-oriented languages such as Java. For web development, I have a solid understanding of JavaScript and have begun incorporating TypeScript for more structured front-end development.</p>
        </>
      )
    },
    frontend: {
      text: (
        <>
          <h1>Frontend Experience</h1>
          <p>In front-end development, I started with standard HTML and CSS, but have since transitioned to using React for more dynamic and maintainable interfaces. I also incorporate Tailwind CSS for efficient, utility-first styling, and occasionally use jQuery for lightweight DOM manipulation when needed.</p>
        </>
      )
    },
    backend: {
      text: (
        <>
          <h1>Backend Experience</h1>
          <p>My backend development experience centers on Python’s Django framework and Java-based applications using Apache Tomcat. I'm well-versed in Django's architecture and have built several web applications using it, typically paired with SQLite for lightweight data storage. On the Java side, I’ve developed web apps deployed on Tomcat, working with MySQL for more robust database management. These experiences have given me a solid working knowledge of SQL and backend systems. Whether it be serving single-user or multi-user systems.</p>
        </>
      )
    },
    devops: {
      text: (
        <>
          <h1>Devops</h1>
          <p>In addition to being fully comfortable in Windows environments, I'm confident working in Linux-based systems such as Ubuntu and Unix. I’ve deployed applications using AWS and Firebase, and have hands-on experience containerizing services with Docker. I'm also proficient with Git on the command line and experienced in using GitHub for version control and collaborative development.</p>
        </>
      )
    },
    ai: {
      text: (
        <>
          <h1>AI Experience</h1>
          <p>I have a deep understanding of different AI architectures and techniques in fields such as Natural Language Processing, Deep Learning, Text Generation, among other Machine Learning techniques. In my academic career I was priviliged enough to learn from leading experts in the fields of AI Knowledge Representation and be apart of the Natural Language Processing Knowledge Representation Lab. This experience allowed me to work in-depth with cutting-edge open-source language models and understand them at a foundational level. I was able to benchmark models including but not limited to; Meta's LLAMA2/3 series of models, DeepSeek, MistralAI, and even was able to utilize OpenAI's GPT API endpoints. Beyond working with language models and integrating them into functioning applications, I'm well versed in utilzing Jupyer Notebooks and typicaly AI libraries such as TensorFlow, PyTorch, and CUDA. Additionally, I have a solid grasp of Answer Set Programming, a declarative programming approach meant to develop robust modeling and reasoning systems for AI agents. </p>
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