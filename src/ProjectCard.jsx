function ProjectCard({ title, description, techStack, link }) {
    return (
      <div className="project-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">
          View Project →
        </a>
      </div>
    )
  }
  
  export default ProjectCard