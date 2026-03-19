import "./SideProjectv2.css";
import todo from "../../resources/todo-list.png";
import ProjectCard from "../ProjectCard/ProjectCard";

function SideProjectv2() {
  return (
    <>
      <h1>My Work</h1>
      <ProjectCard
        title="Todo List"
        description="A simple todo list app built with React and TypeScript."
        image={todo}
      />
    </>
  );
}
export default SideProjectv2;
