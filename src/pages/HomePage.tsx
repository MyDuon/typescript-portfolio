import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
// import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import "../index.css";
import SideProject from "../components/SideProject/SideProject";
import "./HomePage.css";
import Skills from "../components/Skills/Skills";
import { useState } from "react";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page-container">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`home-page-content ${!menuOpen ? "with-padding" : ""}`}>
        <Hero />
        <Skills />
        <SideProject />
        {/* <Experience /> */}
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
