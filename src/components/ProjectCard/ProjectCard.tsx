import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="project-card-container">
      <img className="project-image" src={image} alt={`${title} picture`} />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
