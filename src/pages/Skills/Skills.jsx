import "../Skills/Skills.css";
import Frontend from "../assets/images/frontend.jpg";
import Backend from "../assets/images/backend.jpg";
import Database from "../assets/images/database.jpg";
import Tools from "../assets/images/tools.png";
const Skills = () => {
  return (
    <div className="skills_section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills_flex">
        <div className="flex">
          <img src={Frontend} alt="" />
          <h3>Frontend</h3>
        </div>
        <div className="flex">
          <img src={Backend} alt="" />
          <h3>Backend</h3>
        </div>
        <div className="flex">
          <img src={Database} alt="" />
          <h3>Database</h3>
        </div>
        <div className="flex">
          <img src={Tools} alt="" />
          <h3>Tools & Other</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
