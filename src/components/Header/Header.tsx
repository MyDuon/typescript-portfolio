import "./Header.css";
import { Link } from "react-router";
import resume from "../../assets/CV.pdf";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header-container">
        <Link className="home-button" to="/">
          <p>My Hoang Duong</p>
        </Link>

        {/* Desktop navbar */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="/">About</a>
          {/* <a href="/">Projects</a> */}
          <a href={resume} target="_blank">
            Resume
          </a>
          <Link className="education-button" to="/education">
            <p>Education</p>
          </Link>
        </nav>

        {/* Hamburger button */}
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("menuOpen", menuOpen);
          }}
          className="hamburger-button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
}
export default Header;
