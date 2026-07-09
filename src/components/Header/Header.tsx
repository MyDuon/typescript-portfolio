import "./Header.css";
import { Link } from "react-router";
import resume from "../../assets/CV.pdf";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <header className="header-container">
        <Link className="home-button" to="/">
          My Hoang Duong
        </Link>

        {/* Desktop navbar */}
        <nav className="nav">
          <a href="/">About</a>
          <a href={resume} target="_blank">
            Resume
          </a>
          <Link className="education-button" to="/education">
            Education
          </Link>
        </nav>

        {/* Hamburger button */}
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="hamburger-button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile navbar */}
      {menuOpen && <MobileNavbar />}
    </div>
  );
}
export default Header;
