import "./Creative.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Creative() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  const photos = [
    {
      title: "Mirror of Light",
      desc: "A glowing bulb reflected on a mirror, creating symmetry and depth.",
      id: "112fMEm3d3uH6a_CyKocnvDg_vtoP_BTV"
    },
    {
      title: "Liquid Illumination",
      desc: "Capturing the mesmerizing moment when water embraces light.",
      id: "1guJkEtOeR22tsVuEjwPKed5IVu4AWeUU"
    },
    {
      title: "Meditation in Flames",
      desc: "A serene Buddha surrounded by fiery tones, symbolizing peace amidst chaos.",
      id: "1qcFEzjpWVbn6CU7BIHd86j6VUMAl-uff"
    },
    {
      title: "Pages of Reflection",
      desc: "A folded book mirrored elegantly, blending knowledge with creativity.",
      id: "1xWQLXG4QpEVqQTT58n9KTEHEeGwzvfby"
    },
    {
      title: "Heart of the Bulb",
      desc: "A close-up of the filament, revealing the beauty hidden inside light.",
      id: "11iYzy8EQ0dP-rmtn77dmw1dDDhtDYHwc"
    },
    {
      title: "Phoenix Bot",
      desc: "A toy figure engulfed in flames, portraying resilience and rebirth.",
      id: "1vKYBxYHdvsY6ihSKXFhhkosaL2gzo_sT"
    },
    {
      title: "Blazing Rose",
      desc: "A symbol of beauty and passion captured through fire and light.",
      id: "1EEV00sN51PhiCDLllCeCOtKh2h4wlVlQ"
    },
    {
      title: "Echoes of Light",
      desc: "Long shutter reflections creating dreamy trails and artistic patterns.",
      id: "1sd7-79DFm3yt6YW08JfkeDnD9vpuCfgr"
    },
    {
      title: "Frozen Explosion",
      desc: "A high-speed capture of a water balloon bursting in a fraction of a second.",
      id: "1jWDo2pq89HSoTYZBmcWdKNFQwWcob2zB"
    }
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
    <section className="creative-page">
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="creative-header">
        <h1>🎨 Creative Photography</h1>
        <p>Exploring imagination through colors, lights and stories.</p>
      </div>

      <div className="creative-grid">
        {currentPhotos.map((photo, index) => (
          <div className="photo-card" key={startIndex + index}>
            <div className="photo-wrapper">
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImgError(e, photo.id)}
              />
            </div>
            <div className="photo-info">
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

export default Creative;