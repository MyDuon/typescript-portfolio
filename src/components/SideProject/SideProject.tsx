import "./SideProject.css";
import calculator_gif from "../../assets/calculator.gif";
import tictactoe_gif from "../../assets/tictactoe.gif";
import ProjectCard from "./ProjectCard";
import todo_gif from "../../assets/todo_list.gif";
import thinkboard_gif from "../../assets/thinkboard.gif";
import movieapp_gif from "../../assets/movieapp.gif";

function SideProject() {
  return (
    <>
      <div className="side-project-container">
        <h1 className="side-project-header">My Work</h1>
        <ProjectCard
          imageSrc={todo_gif}
          alt="Todo List App"
          title="Todo List"
          description="Front-end todo list built with React in TypeScript. Uses local storage to save the user's tasks and allows them to add and delete tasks. The app is responsive and has a clean, minimalist design."
          link="/todolist"
          github="https://github.com/example/todo"
        />
        <ProjectCard
          imageSrc={calculator_gif}
          alt="Calculator App"
          title="Calculator"
          description="A simple calculator app built with React in TypeScript. Allows users to perform basic arithmetic operations."
          link="/calculator"
          github="https://github.com/example/calculator"
        />
        <ProjectCard
          imageSrc={movieapp_gif}
          alt="Movie App"
          title="Movie App"
          description="A movie browsing app built with React in TypeScript. Allows users to search for movies and view details."
          link="/streaming"
          github="https://github.com/example/streaming"
        />
        <ProjectCard
          imageSrc={thinkboard_gif}
          alt="Think Board App"
          title="Think Board"
          description="A collaborative brainstorming app built with React in TypeScript. Allows users to create and share ideas in a visual board format."
          link="https://mern-thinkboard-l60u.onrender.com/"
          github="https://github.com/example/thinkboard"
        />
        <ProjectCard
          imageSrc={tictactoe_gif}
          alt="Tic Tac Toe App"
          title="Tic Tac Toe"
          description="A classic Tic Tac Toe game built with React in TypeScript. Features a clean, modern design and responsive layout."
          link="/tictactoe"
          github="https://github.com/example/tictactoe"
        />
      </div>
    </>
  );
}
export default SideProject;
