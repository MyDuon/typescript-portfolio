import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="heading">Skills</h1>
      <div className="skills-content">
        <div className="programming-languages-container">
          <h2 className="programming-language-heading">
            Programming Languages
          </h2>
          <div className="programming-languages-content">
            <div className="skill-item">Typescript</div>
            <div className="skill-item">Javascript</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">Kotlin</div>
            <div className="skill-item">Emerald</div>
          </div>
        </div>
        <div className="front-end">
          <h2 className="front-end-heading">Front-End Frameworks</h2>
          <div className="front-end-content">
            <div className="skill-item">React</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">Figma</div>
          </div>
        </div>
        <div className="back-end">
          <h2 className="back-end-heading">Back-End Technologies</h2>
          <div className="back-end-content">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">PostgreSQL</div>
          </div>
        </div>
        <div className="other">
          <h2 className="other-heading">Other Technologies</h2>
          <div className="other-content">
            <div className="skill-item">Azure</div>
            <div className="skill-item">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
