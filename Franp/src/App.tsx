import { Routes, Route, Link } from 'react-router-dom'
import HomeIcon from './assets/Home.svg'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/"><img src={HomeIcon} alt="Home" className="home-icon" /></Link></li>  
            <li><Link to="/about">/about</Link></li>
            <li><Link to="/projects">/projects</Link></li>
            <li><Link to="/resume">/resume</Link></li>
            <li><Link to="/contact">/contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App