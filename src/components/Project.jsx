// components/Projects.jsx
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce businesses with analytics, product management, and order tracking.",
      icon: "fas fa-shopping-cart",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management application with team collaboration features and real-time updates.",
      icon: "fas fa-tasks",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Application",
      description: "A weather forecast app that displays current weather and 5-day forecasts for any location around the world.",
      icon: "fas fa-cloud-sun",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title fade-in">
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on recently</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card fade-in">
              <div className="project-img">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github}><i className="fab fa-github"></i></a>
                  <a href={project.demo}><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;