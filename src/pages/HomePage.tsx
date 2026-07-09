import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import "../index.css";
import SideProject from "../components/SideProject/SideProject";
import "./HomePage.css";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />
      <Skills />
      <SideProject />
      <Footer />
    </div>
  );
}
export default HomePage;
