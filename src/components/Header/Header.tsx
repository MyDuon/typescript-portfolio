import "./Header.css";
import { Link } from "react-router";
import resume from "../../assets/CV.pdf";
import MobileNavbar from "./MobileNavbar";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <>
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
    </>
  );
}
export default Header;
