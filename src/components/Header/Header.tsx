import "./Header.css";
import { Link } from "react-router";
import resume from "../../assets/CV.pdf";

function Header() {
  return (
    <>
      <header className="header-container">
        <Link className="home-button" to="/">
          <p>My Hoang Duong</p>
        </Link>
        <nav className="nav">
          <a href="/">About</a>
          {/* <a href="/">Projects</a> */}
          <a href={resume} target="_blank">
            Resume
          </a>
          <Link className="education-button" to="/education">
            <p>Education</p>
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Header;
