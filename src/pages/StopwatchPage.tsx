import Header from "../components/Header/Header";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import "./StopwatchPage.css";

function StopwatchPage() {
  return (
    <div className="stopwatch-page-container">
      <Header />
      <ProjectDescription
        description={
          "Beskrivelse: Lagde en stoppeklokke med Arduino med en LCD-skjerm og knapper."
        }
        goal={"Mål: Lære å bruke Arduino og lage noe enkelt."}
        todo={"TODO: Lage et større arduino-prosjekt."}
      />
      <div className="stopwatch-wrapper">
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/IlA6ZdF3Nro"
          title="Arduino Stopwatch"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default StopwatchPage;
