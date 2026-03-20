import "./ProjectCard.css";

type ProjectCardProps = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
};

function ProjectCard({ imageSrc, alt, title, description }: ProjectCardProps) {
  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img className="test" src={imageSrc} alt={alt} />
      </div>
      <div className="project-description">
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <h4 className="project-description-text">{description}</h4>
        </div>
        <div className="project-links">
          <a href="Test">Link</a>
          <a href="Test">Github</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
