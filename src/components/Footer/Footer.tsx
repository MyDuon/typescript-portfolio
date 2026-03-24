import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github-mark.png";
import email from "../../assets/email-icon.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <h1 className="contact-header">Contact me</h1>
        <div className="logo-container">
          <div className="linkedin-logo">
            <a href="https://www.linkedin.com/in/my-hoang-duong/">
              <img className="linkedin" src={linkedin} alt="linkedin logo" />
            </a>
          </div>
          <div className="github-logo">
            <a href="https://github.com/MyDuon">
              <img className="github" src={github} alt="github logo" />
            </a>
          </div>
          <div className="email-logo">
            <a href="mailto:mydh1502@gmail.com">
              <img className="email" src={email} alt="email logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
