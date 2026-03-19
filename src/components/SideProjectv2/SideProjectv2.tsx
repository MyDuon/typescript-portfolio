import "./SideProjectv2.css";
import todo from "../../resources/todo-list.png";
import ProjectCard from "../ProjectCard/ProjectCard";

function SideProjectv2() {
  return (
    <>
      <div className="side-project-container">
        <h1 className="side-project-header">My Work</h1>
        <div className="sideproject-grid">
          <ProjectCard
            title="Todo List"
            description="A simple todo list app built with React and TypeScript."
            image={todo}
          />
          <ProjectCard
            title="Todo List"
            description="A simple todo list app built with React and TypeScript."
            image={todo}
          />
        </div>
      </div>
    </>
  );
}
export default SideProjectv2;
