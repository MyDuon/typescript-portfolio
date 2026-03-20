import "./SideProjectv2.css";
import todo from "../../resources/todo-list.png";

function SideProjectv2() {
  return (
    <>
      <div className="side-project-container">
        <h1 className="side-project-header">My Work</h1>
        <div className="project-container">
          <img src={todo} alt="Todo List App" />
          <div>
            <h2>Project Title</h2>
            <h3>Desctiption</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideProjectv2;
