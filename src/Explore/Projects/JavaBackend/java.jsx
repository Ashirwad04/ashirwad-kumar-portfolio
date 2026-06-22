import "./Java.css";
import { useNavigate } from "react-router-dom";

function Java() {
  const navigate = useNavigate();

  return (
    <section className="java-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="java-card">

        <div className="java-icon">
          ☕
        </div>

        <h1>Java Backend Projects</h1>

        <p>
          Explore backend applications and APIs built using Java and Spring Boot.
          These projects demonstrate my experience with REST APIs, database design,
          authentication, microservices, and scalable application development.
        </p>

        <div className="coming-soon">
          🚀 Projects Coming Soon
        </div>

        <div className="quote">
          "Good software is built one class at a time."
        </div>

      </div>

    </section>
  );
}

export default Java;