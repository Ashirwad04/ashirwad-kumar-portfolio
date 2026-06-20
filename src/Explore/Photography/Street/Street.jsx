import "./Street.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Stret() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  const photos = [
    { title: "Lunch Together", desc: "Three Buddhist kids sharing their lunch.", id: "12G4ccS6R3tFiXo7Xq6T31D9lwNHP2C6w" },
    { title: "Entering the Temple", desc: "A Buddhist priest walking into the main temple at Bodh Gaya.", id: "16wjSjcmhkvoWMGxfFdC8eb3PYUEJw0cT" },
    { title: "Moment of Meditation", desc: "A Buddhist monk seated in meditation, prayer beads in hand.", id: "1DkH7cy1s7atvh0N7ScIemvXBNRu4NmSD" },
    { title: "Crowded Market Lane", desc: "A bustling market street — an old man on his bicycle, riders weaving through the crowd.", id: "18xqa1JEIW6joP6XU-SIpLi7lcZNORZq1" },
    { title: "The Balloon Seller", desc: "A masked vendor selling balloons on the street.", id: "15sgpzXlm7wDYrDQgRWwtfGQw1veAYxFb" },
    { title: "Homemade Cards", desc: "Three children playing cards they made themselves.", id: "1zZYDW_iEJmuRx1ShIztfoxXO-lHzhGy4" },
    { title: "Mid Explanation", desc: "Candid black and white portrait, captured mid-gesture.", id: "1hCS3cU3zwNcJNiXtC5J9HcfrQDVbqKGx" },
    { title: "Expressive Hands", desc: "A candid black and white moment, hands telling the story.", id: "1_po6DkNq1yOFFT_6Yc5rgEkGfBIRKt8J" },
    { title: "Candid Conversation", desc: "Black and white candid portrait with expressive hand gestures.", id: "1xQ6nstMC2ChEvRDi4geBfftwD919IS6S" },
    { title: "Auto in Motion", desc: "A panning shot of an auto-rickshaw and its driver.", id: "1E8vC5xUHiw_50apaC3XsYTRmFTWXKGgV" },
    { title: "The Temple Drummer", desc: "A candid moment of a man playing a traditional drum inside a Buddhist temple.", id: "1sjAJEH08PXLqJRiAs-1QmMk0q6_PqntS" },
    { title: "Riding Without Helmets", desc: "A panning shot of two riders on a bike, no helmets.", id: "1JUXEYEd9Sgjap_o5gZs7VYsh6xekVTSh" }
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
    <section className="street-page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="street-header">
        <h1>🌆 Street Photography</h1>
        <p>Candid moments, everyday life, and stories from the street.</p>
      </div>

      <div className="street-grid">
        {currentPhotos.map((photo, index) => (
          <div className="street-card" key={startIndex + index}>
            <div className="street-image">
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImgError(e, photo.id)}
              />
            </div>
            <div className="street-info">
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

export default Stret;