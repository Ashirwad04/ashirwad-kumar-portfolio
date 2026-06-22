import "./Travel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMeta from "../../../hooks/useMeta";

function Travel() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  useMeta({
    title: "Travel Photography — Ashirwad Kumar",
    description: "Travel photography by Ashirwad Kumar — Bodh Gaya, Rishikesh, Haridwar, Buddha statues, Ganga Aarti, and solar eclipse.",
    keywords: "travel photography, Bodh Gaya, Rishikesh, Haridwar, India travel, Ashirwad Kumar",
    url: "https://ashirwadkumar.com/photography/travel",
  });
  const photosPerPage = 6;

  const photos = [
    { title: "The Great Buddha Statue", desc: "The giant Gautam Buddha statue at Bodh Gaya, framed by trees on three sides.", id: "1G6G5Zkqlrl5FDaC7zP_Y-jZuy4gSTae7" },
    { title: "Rishikesh Ropeway", desc: "A scenic mountain view captured from the Rishikesh ropeway.", id: "1n-4VNMulPNhAfjq9BgX1ukPjyA0iVZRN" },
    { title: "Stone Statue, Bodh Gaya", desc: "A stone statue captured around Bodh Gaya.", id: "1mj5-yevUvpgz6PMAZo1CSAslXLOVwlCV" },
    { title: "Solar Eclipse Over Patna", desc: "A half-covered sun during the solar eclipse, captured in Patna.", id: "1tZObkXj4jdCC0R93i2q8lXTI40Mj5U5K" },
    { title: "Light Trails", desc: "Light painting from passing cars and buses along a straight street.", id: "1UuEEtt2Pz4uSj43Y4G-7vAryx2KLsIik" },
    { title: "Eclipse Through the Clouds", desc: "The solar eclipse glowing through clouds in a perfect orange circle.", id: "11D0ojjAgsFMHYm7fD2ykcS76C7SfdwzY" },
    { title: "Morning in Haridwar Market", desc: "An early morning view of Haridwar market near Mansa Devi route, shops still shut.", id: "15RhiIFQfJUS-UJJisq5zKn4Kk7P6upN9" },
    { title: "Har Ki Pauri Ghat", desc: "The sacred ghat of Har Ki Pauri in Haridwar.", id: "1aj2vSQrcP3akY5iiIWOgNV-1QrqUBMXQ" },
    { title: "The Vegetable Vendor", desc: "A vegetable vendor setting up early morning at Haridwar market.", id: "1dbN2lxqsTItmtcvN6jc8smCjnmopvsDR" },
    { title: "Geeta Bhawan, Rishikesh", desc: "Geeta Bhawan in Rishikesh under cloudy skies.", id: "1xexzcLGJgtGPAuFeNl4GOIgRnbmDLdvz" },
    { title: "Gautam Buddha Statue, Bodh Gaya", desc: "Another view of the giant Buddha statue at Bodh Gaya.", id: "1nfmir-8Lb34U8sl5Y_cnfnjRD4QdQmM8" },
    { title: "Ganga Aarti, Rishikesh", desc: "A priest performing Ganga Aarti, devotees gathered around to receive the blessing of the flame.", id: "12_w0GEUFx961yP1zpmJYymG5PGiIWyO5" }
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
    <section className="travel-page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="travel-header">
        <h1>🧳 Travel Photography</h1>
        <p>Places, journeys, and moments captured along the way.</p>
      </div>

      <div className="travel-grid">
        {currentPhotos.map((photo, index) => (
          <div className="travel-card" key={startIndex + index}>
            <div className="travel-image">
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImgError(e, photo.id)}
              />
            </div>
            <div className="travel-info">
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

export default Travel;