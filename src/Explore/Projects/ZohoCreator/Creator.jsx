import { useNavigate } from "react-router-dom";

function Creator() {

  const navigate = useNavigate();

  return (
    <section className="creator-projects">

      <button
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>Zoho Creator Projects</h1>

      <p>
        Explore the custom business applications I have
        developed using Zoho Creator.
      </p>

      <h1>testing this </h1>


    </section>
  );
}

export default Creator;