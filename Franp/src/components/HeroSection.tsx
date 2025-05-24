import GithubIcon from '../assets/Github.svg'
import LinkedInIcon from '../assets/LinkedIn.svg' // You'll need this icon
import HuggingFaceIcon from '../assets/HuggingFace.svg'
import './HeroSection.css'
function HeroSection() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/framirez64', 
      icon: GithubIcon 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/francisco-ram%C3%ADrez-7482082bb/', 
      icon: LinkedInIcon 
    },
    { 
      name: 'Hugging Face', 
      url: 'https://huggingface.co/frank277', 
      icon: HuggingFaceIcon 
    }
  ]

  return (
    <section>
      <h2>Francisco 'Frank'</h2>
      <h1>Jesús Ramírez-Reyna</h1>
      <p>Software Developer</p>
      
      <div className="social-links">
        {socialLinks.map((social) => (
          <a 
            key={social.name}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={social.icon} alt={social.name} className="social-icon" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default HeroSection