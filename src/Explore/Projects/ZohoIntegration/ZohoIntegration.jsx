import "./ZohoIntegration.css";
import { useNavigate } from "react-router-dom";

function ZohoIntegration() {
  const navigate = useNavigate();

  return (
    <section className="integration-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="integration-card">

        <div className="integration-icon">
          🔗
        </div>

        <h1>Zoho Integration Projects</h1>

        <p>
          Explore integrations and automation solutions built across
          the Zoho ecosystem and third-party platforms. These projects
          demonstrate my experience with APIs, webhooks, Deluge scripting,
          and seamless data synchronization.
        </p>

        <div className="coming-soon">
          🚀 Projects Coming Soon
        </div>

        <div className="quote">
          "Integration is not just connecting systems, it's connecting possibilities."
        </div>

      </div>

    </section>
  );
}

export default ZohoIntegration;