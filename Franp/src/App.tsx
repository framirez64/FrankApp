
import GithubIcon from './assets/Github.svg'
import HomeIcon from './assets/Home.svg'
import HuggingFaceIcon from './assets/HuggingFace.svg'
import OmahaIcon from './assets/Omaha.svg'
import ArrowIcon from './assets/Arrow.svg'
import './App.css'

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
        <section>
          <h2>Francisco 'Frank'</h2>
          <h1>Jesús Ramírez-Reyna</h1>
          <p>Software Developer</p>
        </section>
      </main>
    </>
  )
}

export default App
