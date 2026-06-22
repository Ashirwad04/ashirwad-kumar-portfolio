import "./Projects.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const projectCategories = [
    {
      title: "Zoho Creator Projects",
      icon: "🚀",
      description: "Custom business applications built using Zoho Creator.",
      route: "/projects/creator",
    },
    {
      title: "Zoho CRM Projects",
      icon: "📊",
      description: "CRM automation, workflows, blueprints and client solutions.",
      route: "/projects/crm",
    },
    {
      title: "Zoho Integration Projects",
      icon: "🔗",
      description: "Integrations between Zoho applications and third-party platforms.",
      route: "/projects/integrations",
    },
    {
      title: "Java Backend Projects",
      icon: "☕",
      description: "Spring Boot, REST APIs, backend services and microservices.",
      route: "/projects/java",
    },
    {
      title: "React Projects",
      icon: "⚛️",
      description: "Modern frontend applications built using React.",
      route: "/projects/react",
    },
    {
      title: "Fun Projects",
      icon: "🎮",
      description: "Creative and experimental projects developed for fun.",
      route: "/projects/fun",
    },
    {
      title: "Learning Projects",
      icon: "📚",
      description: "Projects created while learning new technologies.",
      route: "/projects/learning",
    },
  ];

  return (
    <section className="projects-page">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back To Portfolio
      </button>

      <div className="projects-header">
        <h1>My Projects</h1>

        <p>
          Explore the different categories of projects I have
          worked on throughout my software development journey.
        </p>
      </div>

      <div className="projects-grid">
        {projectCategories.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => navigate(project.route)}
          >
            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <button className="view-btn">
              View Projects →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;