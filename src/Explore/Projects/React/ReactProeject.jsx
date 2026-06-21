import "./ReactProject.css";
import { useNavigate } from "react-router-dom";

function ReactProject() {

  const navigate = useNavigate();

  return (
    <section className="react-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="react-card">

        <div className="react-icon">
          ⚛️
        </div>

        <h1>React Projects</h1>

        <p>
          Explore modern web applications built using React.js and related
          technologies. These projects showcase my expertise in creating
          responsive user interfaces, reusable components, routing, state
          management, and delivering smooth user experiences.
        </p>

        <div className="coming-soon">
          🚀 Projects Coming Soon
        </div>

        <div className="quote">
          "Build once, componentize forever."
        </div>

      </div>

    </section>
  );
}

export default ReactProject;