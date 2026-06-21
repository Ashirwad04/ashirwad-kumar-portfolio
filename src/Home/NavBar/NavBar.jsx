import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Ashirwad Kumar</h2>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#explore" onClick={() => setMenuOpen(false)}>
            Explore
          </a>
        </li>

        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
        </li>

        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default NavBar;