import "./Vaishno_Devi.css";
import { useNavigate } from "react-router-dom";

function VaishnoDevi() {
  const navigate = useNavigate();

  return (
    <section className="vaishno-page">

      <button
        className="vaishno-back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Blogs
      </button>

      <header className="vaishno-header">
        <div className="vaishno-icon">
          🛕
        </div>

        <h1>My Vaishno Devi Journey</h1>

        <p>
          A journey of faith, mountains, beautiful views, challenges,
          and unforgettable memories.
        </p>

        <div className="vaishno-meta">
          <span>📍 Jammu & Kashmir</span>
          <span>🛕 Vaishno Devi</span>
          <span>✍️ Ashirwad Kumar</span>
        </div>
      </header>

      <article className="vaishno-content">

        <p className="intro">
          Some journeys are not just about reaching a destination.
          They are about everything that happens along the way.
          My visit to Vaishno Devi was one such journey.
        </p>

        <h2>The Beginning of the Journey</h2>

        <p>
          The journey to Vaishno Devi begins long before reaching the
          holy shrine.
        </p>

        <h2>The Trek</h2>

        <p>
          The trek towards Vaishno Devi was one of the most memorable
          parts of the journey.
        </p>

      </article>

      <div className="vaishno-footer">
        <button
          className="back-blog-btn"
          onClick={() => navigate("/blogs")}
        >
          ← Back to All Blogs
        </button>
      </div>

    </section>
  );
}

export default VaishnoDevi;