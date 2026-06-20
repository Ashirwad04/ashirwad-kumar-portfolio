import "./Photography.css";


import { useNavigate } from "react-router-dom";

function Photography() {

  const navigate = useNavigate();

  const categories = [
  {
    title: "Creative",
    icon: "🎨",
    description: "Creative and artistic compositions.",
    route: "/photography/creative"
  },
  {
    title: "Nature",
    icon: "🌿",
    description: "Landscapes, flowers, mountains and nature.",
    route: "/photography/nature"
  },
  {
    title: "Portrait",
    icon: "📸",
    description: "Portrait and people photography.",
    route: "/photography/portrait"
  },
  {
    title: "Street",
    icon: "🏙️",
    description: "Moments from everyday life and urban scenes.",
    route: "/photography/street"
  },
  {
    title: "Travel",
    icon: "✈️",
    description: "Memories and stories from different places.",
    route: "/photography/travel"
  },
  {
    title: "Wildlife",
    icon: "🦅",
    description: "Birds, animals and wildlife photography.",
    route: "/photography/wildlife"
  }
];

  return (
    <section className="photography-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="photo-header">
        <h1>Photography</h1>

        <p>
          A collection of moments captured through my lens.
          Explore different genres of photography that inspire me.
        </p>
      </div>

      <div className="photo-grid">

        {categories.map((category, index) => (

          <div
          key={index}
          className="photo-card"
          onClick={() => navigate(category.route)}
        >
            <div className="photo-icon">
              {category.icon}
            </div>

            <h2>{category.title}</h2>

            <p>{category.description}</p>

           <button
            className="view-btn"
            onClick={() => navigate(category.route)}
          >
            View Gallery →
          </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Photography; 