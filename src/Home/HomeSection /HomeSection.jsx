import "./HomeSection.css";

import profilePic from "../../assets/picture.jpg";

function HomeSection() {
  return (
    
    <section id="home" className="home-section">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="home-content">

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
            I’m passionate about building applications and creating impactful digital experiences.
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