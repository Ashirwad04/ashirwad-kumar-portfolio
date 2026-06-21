import "./Fun.css";
import { useNavigate } from "react-router-dom";

function FunProject() {

  const navigate = useNavigate();

  return (
    <section className="fun-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="fun-card">

        <div className="fun-icon">
          🎮
        </div>

        <h1>Fun Projects</h1>

        <p>
          A collection of creative and experimental projects built for
          learning, curiosity, and enjoyment. These projects showcase
          ideas, small utilities, games, and unique concepts that made
          coding more fun and exciting.
        </p>

        <div className="coming-soon">
          🚀 Projects Coming Soon
        </div>

        <div className="quote">
          "Not every project needs a purpose. Some are built simply for the joy of creating."
        </div>

      </div>

    </section>
  );
}

export default FunProject;