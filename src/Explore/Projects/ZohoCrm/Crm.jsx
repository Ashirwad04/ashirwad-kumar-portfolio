import "./Crm.css";
import { useNavigate } from "react-router-dom";

function Crm() {

  const navigate = useNavigate();

  return (
    <section className="crm-section">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="crm-card">

        <div className="crm-icon">
          📊
        </div>

        <h1>Zoho CRM Projects</h1>

        <p>
          Explore CRM solutions and automation workflows developed
          using Zoho CRM. These projects demonstrate my expertise in
          module customization, Blueprints, Deluge scripting, API
          integrations, and building efficient business processes.
        </p>

        <div className="coming-soon">
          🚀 Projects Coming Soon
        </div>

        <div className="quote">
          "Customer relationships grow when technology works seamlessly."
        </div>

      </div>

    </section>
  );
}

export default Crm;