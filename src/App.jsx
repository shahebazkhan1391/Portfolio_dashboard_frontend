import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'
import ProjectCard from './ProjectCard'
import ContactForm from './ContactForm' // <-- 1. Import it here

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const myProjects = [
    {
      title: "Personal Dashboard",
      description: "My very first interactive React application built with Vite.",
      techStack: ["React", "Vite", "CSS3"],
      link: "https://github.com"
    },
    {
      title: "Weather Sphere",
      description: "A beautiful weather tracking app fetching live API data.",
      techStack: ["React", "Fetch API", "Tailwind"],
      link: "https://github.com"
    },
    {
      title: "E-Commerce Cart",
      description: "A fully functional shopping cart with state management.",
      techStack: ["React", "Context API", "Node.js"],
      link: "https://github.com"
    }
  ]

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="dashboard">
        
        <button className="theme-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <ProfileCard 
          name="Shahebaz Khan" 
          role="React Developer in Training" 
          bio="Crushing bugs, learning state, and writing clean components."
          avatar="https://api.dicebear.com/7.x/bottts/svg?seed=Shahebaz" 
        />

        <div className="projects-section">
          <h3>My Projects Portfolio</h3>
          <div className="project-grid">
            {myProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* <-- 2. Add the Contact Form component right here */}
        <div className="contact-section" style={{ marginTop: '2.5rem' }}>
          <ContactForm />
        </div>

        <div className="links-section" style={{ marginTop: '2.5rem' }}>
          <h3>Connect with me</h3>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-btn">LinkedIn</a>
        </div>

      </div>
    </div>
  )
}

export default App