import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Ashirwad Kumar</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#about">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;