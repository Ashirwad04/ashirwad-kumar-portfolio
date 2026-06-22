import "./Nature.css";
import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function Nature() {
  const navigate = useNavigate();
  useMeta({
    title: "Nature Photography — Ashirwad Kumar",
    description: "Nature photography by Ashirwad Kumar — landscapes, mountains, rivers, forests, and sunsets from travels across India.",
    keywords: "nature photography, landscape, mountains, rivers, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/photography/nature",
  });

  return (
    <section className="nature-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="nature-card">

        <div className="nature-icon">
          🌿
        </div>

        <h1>Nature Photography</h1>

        <p>
          Capturing mountains, rivers, forests, sunsets, and
          the beauty of nature through my lens. This gallery
          will showcase moments collected from my journeys and travels.
        </p>

        <div className="coming-soon">
          📸 Collection Coming Soon
        </div>

        <div className="quote">
          "Nature is not a place to visit. It is home."
        </div>

      </div>

    </section>
  );
}

export default Nature;