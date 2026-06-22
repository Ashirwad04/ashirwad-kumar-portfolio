import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function Creator() {
  const navigate = useNavigate();
  useMeta({
    title: "Zoho Creator Projects — Ashirwad Kumar",
    description: "Custom business applications built by Ashirwad Kumar using Zoho Creator.",
    keywords: "Zoho Creator, custom apps, business applications, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/projects/creator",
  });

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