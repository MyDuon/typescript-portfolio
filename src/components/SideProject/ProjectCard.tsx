import "./ProjectCard.css";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  imageSrc: string; // can now also be video
  alt: string;
  title: string;
  description: string;
  link: string; // can be internal or external
  github: string; // external
};

function ProjectCard({
  imageSrc,
  alt,
  title,
  description,
  link,
  github,
}: ProjectCardProps) {
  // Treat link as external if it starts with http:// or https://
  const isExternalLink: boolean =
    link.startsWith("http://") || link.startsWith("https://");

  // true if imageSrc ends with .mp4 (case-insensitive)
  const isVideo = /\.mp4$/i.test(imageSrc);

  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        {isVideo ? (
          <video className="visual-media" controls loop autoPlay>
            <source src={imageSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="visual-media" src={imageSrc} alt={alt} />
        )}
      </div>
      <div className="project-description">
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <h4 className="project-description-text">{description}</h4>
        </div>
        <div className="project-links">
          {/* Internal OR external, depending on the value of `link` */}
          {isExternalLink ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          ) : (
            <Link to={link}>Link</Link>
          )}
          {/* Github is always external */}
          <a href={github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
