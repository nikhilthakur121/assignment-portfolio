import "../Navbar/Navbar.css";
import burger from '../assets/icons/burger.svg'
const Navbar = () => {
  return (
    <div className="Navbar-container">
      <p>Portfolio</p>
      <ul className="Navbar-links">
        <li>
          <a href="#home" className="left_nav">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="left_nav">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="left_nav">
            Skills
          </a>
        </li>
        <li>
          <a href="#journey" className="right_nav">
            Journey
          </a>
        </li>
        <li>
          <a href="#projects" className="right_nav">
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonial" className="right_nav">
            Testimonials
          </a>
        </li>
        <button className="button">Contact</button>    
      </ul>
    </div>
  );
};

export default Navbar;
