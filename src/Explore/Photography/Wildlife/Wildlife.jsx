import "./Wildlife.css";
import { useNavigate } from "react-router-dom";

function Wildlife() {
  const navigate = useNavigate();

  return (
    <section className="wildlife-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="wildlife-card">

        <div className="wildlife-icon">
          🦅
        </div>

        <h1>Wildlife Photography</h1>

        <p>
          Capturing the beauty, behavior, and spirit of wildlife through
          my lens. From birds and butterflies to animals in their natural
          habitats, every frame tells a story of the wild.
        </p>

        <div className="coming-soon">
          📷 Gallery Coming Soon
        </div>

        <div className="quote">
          "In every walk with nature, one receives far more than he seeks."
        </div>

      </div>

    </section>
  );
}

export default Wildlife;