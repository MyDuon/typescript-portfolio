import "./Hero.css";
import picture from "../../resources/hero_picture.jpg";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="left-hero">
          <h1 className="hero-intro">
            Hei, Jeg er <span className="hero-name">My</span> – Fullstack
            utvikler og masterstudent innen IT
          </h1>
          <h2 className="hero-description">
            Jeg bygger fullstack-løsninger med fokus på både god kodekvalitet og
            responsiv design. Til daglig studerer jeg informatikk på UIO, og
            jobber med teknologier som f.eks.{" "}
            <span className="hero-name">React</span>,{" "}
            <span className="hero-name">TypeScript</span>,{" "}
            <span className="hero-name">Node.js</span>, {""}
            <span className="hero-name">MongoDB</span>. På denne siden finner du
            et utvalg av prosjektene mine, og litt mer om meg selv.
          </h2>
        </div>
        <div className="right-hero">
          <img className="hero-picture" src={picture} alt="picture of me" />
        </div>
      </div>
    </>
  );
}
export default Hero;
