import "../Journey/Journey.css";
import Experience1 from "../assets/images/Experience1.jpg";
import Experience2 from "../assets/images/Experience2.jpg";
const Journey = () => {
  return (
    <>
      <div className="Journey_container" id="journey">
        <h2> My Journey</h2>
        <h3>Education</h3>
        <div className="Journey_section">
          <div className="Journey_item">
            <h6>Bachelor of Computer Applications (BCA)</h6>
            <div className="Journey_item-jr">
              <span>Christ University, Bengaluru</span>
              <span>- 2019-2022</span>
            </div>
          </div>
          <div></div>
          <div className="Journey_item">
            <h6>Certificate in Full Stack Web Development</h6>
            <div className="Journey_item-jr">
              <span>Udemy / Coursera</span>
              <span>- 2023</span>
            </div>
          </div>
          <div className="Journey_item">
            <h6>Bachelor of Computer Applications (BCA)</h6>
            <div className="Journey_item-jr">
              <span>Christ University, Bengaluru</span>
              <span>- 2019-2022</span>
            </div>
          </div>
          <div></div>
          <div className="Journey_item">
            <h6>Certificate in Full Stack Web Development</h6>
            <div className="Journey_item-jr">
              <span>Udemy / Coursera</span>
              <span>- 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <div className="experience1">
          <div className="experience1-left">
            <img src={Experience1} alt="exp1" />
          </div>
          <div className="experience1-right">
            <h4>Frontend Developer Intern</h4>
            <div className="experience-date">
              <h4>TechNova Solutions</h4>
              <b>2022-2023</b>
            </div>
            <ul>
              <li>Designed and developed UI components using React.</li>
              <li>Improved site speed by 35% through code optimization</li>
              <li>
                Collaborated with designers to translate figma files <br />
                into responsive web pages.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience2">
          <div className="experience2-left">
            <div className="experience-date">
              <h4>Freelancer Web Developer</h4>
              <b>2022-2023</b>
            </div>
            <ul>
              <li>
                Delivered responsive websites for small businesses and <br />
                personal brands
              </li>
              <li>Integrated SEO practices and analytics tools.</li>
            </ul>
          </div>
          <div className="experience2-right">
            <img src={Experience2} alt="exp2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
