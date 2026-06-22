import "./Portrait.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function Portrait() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  useMeta({
    title: "Portrait Photography — Ashirwad Kumar",
    description: "Portrait photography by Ashirwad Kumar — emotions, expressions, candid moments, and Holi color celebrations.",
    keywords: "portrait photography, candid portraits, Holi photography, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/photography/portrait",
  });
  const photosPerPage = 6;

  const photos = [
    { title: "Silent Gaze", desc: "A close portrait capturing emotions and expressions.", id: "1--VE26gct3ivsqn8nu2rzWQ9JaW9Mw7Y" },
    { title: "Natural Portrait", desc: "Simple yet elegant composition with soft lighting.", id: "1P6tHQ3-zLxy98AQpwZJMD6GjEEnejlJu" },
    { title: "Thoughtful Look", desc: "A portrait filled with calm and emotion.", id: "1ydbKQSL7w8oUu-d3okuSg1R8JZeXkb7-" },
    { title: "Terrace Pose", desc: "Capturing confidence and natural posture.", id: "18w-4MS4EzKUuNTkexXJtN0-LNa7ROlJl" },
    { title: "Standing Portrait", desc: "An expressive portrait with cinematic vibes.", id: "1GBt9CTUvwlA4sGRGpilrPtlkKdknkQ1W" },
    { title: "Chair Portrait", desc: "A relaxed and artistic composition.", id: "1IgmjAPzYSNkhkrvQ2A-dQjOlBq5bKC5k" },
    { title: "Reading Through Fire", desc: "Focused on the newspaper despite the flames.", id: "14MdZL4tofb4Ca6OD9As-J51Ouuf1oq8I" },
    { title: "Burning Pages", desc: "Creativity and storytelling through fire.", id: "1iJiRoymrqHEJibB-LWxnl4xUmeExDoDI" },
    { title: "Elegant Portrait", desc: "Grace and beauty captured naturally.", id: "1rg6cgPbAMVOjIlgs23f5N_qsNfx8E3JO" },
    { title: "Natural Smile", desc: "A joyful and candid portrait.", id: "1xNRuhkEnUnaiEALHn_ytIGGA7elVtYZk" },
    { title: "Colors of Holi", desc: "Vibrant colors and joyful moments.", id: "18XzzvJCM8h5RB9DY4qy1JsQn5I4eGOkZ" },
    { title: "Eyes Closed", desc: "Peaceful portrait immersed in colors.", id: "1S5dSCNzYuFg3tH4ut5hue-mRXypc8LSU" }
  ];

  const totalPages = Math.ceil(photos.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const currentPhotos = photos.slice(startIndex, startIndex + photosPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImgError = (e, id) => {
    const tried = e.target.dataset.fallback || "0";
    if (tried === "0") {
      e.target.dataset.fallback = "1";
      e.target.src = `https://lh3.googleusercontent.com/d/${id}=w1000`;
    } else if (tried === "1") {
      e.target.dataset.fallback = "2";
      e.target.src = `https://drive.google.com/uc?export=view&id=${id}`;
    } else {
      e.target.onerror = null;
    }
  };

  return (
    <section className="portrait-page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="portrait-header">
        <h1>📸 Portrait Photography</h1>
        <p>Portraits that capture emotions, expressions and stories.</p>
      </div>

      <div className="portrait-grid">
        {currentPhotos.map((photo, index) => (
          <div className="portrait-card" key={startIndex + index}>
            <div className="portrait-image">
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImgError(e, photo.id)}
              />
            </div>
            <div className="portrait-info">
              <h3>{photo.title}</h3>
              <p>{photo.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹ Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Portrait;