import "./ReactProject.css";
import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function ReactProject() {
  const navigate = useNavigate();
  useMeta({
    title: "React Projects — Ashirwad Kumar",
    description: "Modern React.js web applications by Ashirwad Kumar — responsive UIs, reusable components, routing and state management.",
    keywords: "React projects, React.js, frontend development, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/projects/react",
  });

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