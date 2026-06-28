import "./Creator.css";
import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function Creator() {
  const navigate = useNavigate();

  useMeta({
    title: "Zoho Creator Projects — Ashirwad Kumar",
    description:
      "Custom business applications built by Ashirwad Kumar using Zoho Creator.",
    keywords:
      "Zoho Creator, custom apps, business applications, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/projects/creator",
  });

  return (
    <section className="creator-section">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="creator-card">
        <div className="creator-icon">🛠️</div>

        <h1>Zoho Creator Projects</h1>

        <p>
          Explore the custom business applications I have developed using Zoho
          Creator. These projects showcase my expertise in building low-code
          solutions, automating workflows, designing custom forms, writing
          Deluge scripts, and integrating Creator apps with other Zoho and
          third-party services.
        </p>

        <div className="coming-soon">🚀 Projects Coming Soon</div>

        <div className="quote">
          "Great software is built when creativity meets the right tools."
        </div>
      </div>
    </section>
  );
}

export default Creator;