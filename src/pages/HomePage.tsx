import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import "../index.css";
import SideProject from "../components/SideProject/SideProject";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />
      {/* <SideProject /> */}
      <SideProject />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
export default HomePage;
