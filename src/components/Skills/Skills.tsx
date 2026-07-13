import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="heading">Skills</h2>
      <div className="skills-content">
        <div className="programming-languages-container">
          <h3 className="programming-language-heading">
            Programming Languages
          </h3>
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
          <h3 className="front-end-heading">Front-End Frameworks</h3>
          <div className="front-end-content">
            <div className="skill-item">React</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">Figma</div>
          </div>
        </div>
        <div className="back-end">
          <h3 className="back-end-heading">Back-End Technologies</h3>
          <div className="back-end-content">
            <div className="skill-item">Node.js</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">PostgreSQL</div>
          </div>
        </div>
        <div className="other">
          <h3 className="other-heading">Other Technologies</h3>
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
