import HomeIcon from './assets/Home.svg'
import './App.css'
import HeroSection from './HeroSection'
function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/"><img src={HomeIcon} alt="Home" className="home-icon" /></a></li>  
            <li><a href="/about">/about</a></li>
            <li><a href="/projects">/projects</a></li>
            <li><a href="/resume">/resume</a></li>
            <li><a href="/activities">/activities</a></li>
            <li><a href="/contact">/contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <HeroSection />
      </main>
    </>
  )
}

export default App
