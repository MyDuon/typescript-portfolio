import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
// import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import "../index.css";
import SideProject from "../components/SideProject/SideProject";
import "./HomePage.css";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <div className="home-page-content">
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
