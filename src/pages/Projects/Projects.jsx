import "../Projects/Projects.css";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
const Projects = () => {
  return (
    <div className="projects_section" id="projects">
      <h2>Projects</h2>
      <div className="projects1">
        <div className="project1-left">
          <img src={project1} alt="prj1" />
        </div>
        <div className="project1-right">
          <h4>Startup Connect Platform</h4>
          <p>
            A web app connecting investors with early stage startups. Built
            using React and Firebase with live data filtering and dashboard UI.
          </p>
        </div>
      </div>
      <div className="projects2">
        <div className="project2-left">
          <h4>EcoMart E-commerce Website</h4>
          <p>
            Full-stack project using Node.js and MongoDB. Features include cart
            management, authentication, and admin dashboard.
          </p>
        </div>
        <div className="project2-right">
          <img src={project2} alt="prj2" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
