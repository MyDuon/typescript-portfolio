import { Link } from "react-router";
import resume from "../../assets/CV.pdf";
import "./MobileNavbar.css";

function MobileNavbar() {
  return (
    <>
      <nav className="mobile-nav">
        <a href="/">About</a>
        {/* <a href="/">Projects</a> */}
        <a href={resume} target="_blank">
          Resume
        </a>
        <Link className="education-button" to="/education">
          Education
        </Link>
      </nav>
    </>
  );
}

export default MobileNavbar;
