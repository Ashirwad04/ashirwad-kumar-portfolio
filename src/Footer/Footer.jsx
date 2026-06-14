import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}

        <div className="footer-about">
          <h2>Ashirwad Kumar</h2>

          <p>
            Software Engineer • Zoho Developer • Photographer •
            Videographer • Lifelong Learner
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#explore">Explore</a>
          <a href="#education">Education</a>
        </div>

        {/* Contact */}

        <div className="footer-contact">
          <h3>Connect</h3>

          <a
            href="https://github.com/Ashirwad04"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashirwad-kumar-06517b253/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://x.com/AshirwadKu37710"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ashirwad Kumar. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;