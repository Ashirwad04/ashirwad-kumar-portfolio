import "./HomeSection.css";
import profilePic from "./picture.jpg";

function HomeSection() {
  return (
    <section className="home-section">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="home-content">

        {/* LEFT SIDE */}
        <div className="text-content">

          <p className="welcome-text">
            👋 Welcome To My Portfolio
          </p>

          <h1 className="name">
            Hi, I'm <span>Ashirwad Kumar</span>
          </h1>

          <div className="typewriter-container">
            <span className="static-text">I am a</span>

            <div className="typewriter">
              <span>Zoho Developer</span>
              <span>Software Engineer</span>
              <span>React Developer</span>
              <span>Passionate Photographer</span>
              <span>Book Reader</span>
              <span>Chess Player</span>
            </div>
          </div>

          <p className="description">
            I enjoy building scalable applications, creating beautiful
            user experiences, reading books, capturing moments through
            photography, and continuously learning new technologies.
          </p>

          <div className="social-links">

            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="image-content">
          <div className="image-wrapper">
            {/* <img src="picture.jpg" alt="Ashirwad Kumar" /> */}
             <img src={profilePic} alt="Ashirwad Kumar" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeSection;