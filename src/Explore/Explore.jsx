import "./Explore.css";


 import { useNavigate } from "react-router-dom";

function Explore() {

   const navigate = useNavigate();

  return (
    <section id="explore" className="explore-section">

      <div className="explore-header">
        <h1>Explore</h1>

        <div className="explore-line"></div>

        <p>
          Discover my projects, creative work, books I've read,
          and blogs where I share my experiences and learnings.
        </p>
      </div>

      <div className="explore-grid">

        {/* Projects */}

        <div
          className="explore-card"
          onClick={() => navigate("Projects")}
        >
          <div className="explore-icon">💻</div>

          <h2>Projects</h2>

          <p>
            Explore software projects built using Java,
            Spring Boot, React, Zoho Creator, Zoho CRM
            and other technologies.
          </p>

          <span>Explore →</span>
        </div>

        {/* Photography */}

        <div
          className="explore-card"
          onClick={() => navigate("Photography")}
        >
          <div className="explore-icon">📸</div>

          <h2>Photography</h2>

          <p>
            A collection of travel photographs, street photography,
            portraits and visual stories captured during my journeys.
          </p>

          <span>Explore →</span>
        </div>

        {/* Books */}

        <div
          className="explore-card"
          onClick={() => navigate("Books")}
        >
          <div className="explore-icon">📚</div>

          <h2>Books</h2>

          <p>
            Books that have influenced my thinking,
            lessons learned and personal reviews
            from my reading journey.
          </p>

          <span>Explore →</span>
        </div>

        {/* Blogs */}

        <div
          className="explore-card"
          onClick={() => navigate("Blogs")}
        >
          <div className="explore-icon">✍️</div>

          <h2>Blogs</h2>

          <p>
            Technical articles, travel stories,
            photography experiences and lessons
            from my professional journey.
          </p>

          <span>Explore →</span>
        </div>

      </div>

    </section>
  );
}

export default Explore;