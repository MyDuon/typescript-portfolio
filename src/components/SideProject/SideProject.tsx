import "./SideProject.css";
import calculator_gif from "../../assets/calculator.gif";
import tictactoe_gif from "../../assets/tictactoe.gif";
import ProjectCard from "./ProjectCard";
import todo_gif from "../../assets/todo_list.gif";
import thinkboard_gif from "../../assets/thinkboard.gif";
import movieapp_gif from "../../assets/movieapp.gif";
import stopwatch_mp4 from "../../assets/stopwatch.mp4";

function SideProject() {
  return (
    <>
      <div className="side-project-container">
        <h1 className="side-project-header">My Work</h1>
        <ProjectCard
          imageSrc={thinkboard_gif}
          alt="Think Board App"
          title="Think Board"
          description="A full-stack note-taking app built with the MERN stack (MongoDB, Express, React, Node.js) deployed with Render."
          link="https://mern-thinkboard-l60u.onrender.com/"
          github="https://github.com/example/thinkboard"
        />
        <ProjectCard
          imageSrc={todo_gif}
          alt="Todo List App"
          title="Todo List"
          description="A front-end todo list built with React in TypeScript. Uses local storage to save the user's tasks."
          link="/todolist"
          github="https://github.com/example/todo"
        />
        <ProjectCard
          imageSrc={calculator_gif}
          alt="Calculator App"
          title="Calculator"
          description="A front-end calculator app built with React in TypeScript from scratch."
          link="/calculator"
          github="https://github.com/example/calculator"
        />
        <ProjectCard
          imageSrc={movieapp_gif}
          alt="Movie App"
          title="Movie App"
          description="A front-end movie browsing app built with React in TypeScript. Fetches data from the TMDB API and displays popular movies."
          link="/streaming"
          github="https://github.com/example/streaming"
        />
        <ProjectCard
          imageSrc={tictactoe_gif}
          alt="Tic Tac Toe App"
          title="Tic Tac Toe"
          description="A front-end Tic Tac Toe game built with React in TypeScript. Followed a tutorial from the official React documentation."
          link="/tictactoe"
          github="https://github.com/example/tictactoe"
        />
        <ProjectCard
          imageSrc={stopwatch_mp4}
          alt="Stopwatch device"
          title="Stopwatch arduino"
          description="A arduino-based stopwatch device. Built with an LCD display, buttons, and a microcontroller to keep track of time."
          link="/stopwatch"
          github="https://github.com/MyDuon/Arduino-stopwatch"
        />
      </div>
    </>
  );
}
export default SideProject;
