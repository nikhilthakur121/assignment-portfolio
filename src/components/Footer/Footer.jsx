import "../Footer/Footer.css";
import pinterest from "../assets/icons/pinterest.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import internet from "../assets/icons/internet.svg";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h3>Contact Us</h3>
      <p>Have a project in mind? Let's build something amazing together.</p>
      <div className="footer_container">
        <div className="footer_left">
         <span className="svg"><img src={internet} alt="" /> nikhilthakur.dev@gmail.com</span> 
          <span className="svg"><img src={mail} alt="" /> nik16761432@gmail.com</span>
          <span className="svg"><img src={phone} alt="" /> +1 234 567 890</span>
          <div className="social_icons">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={pinterest} alt="" />
          </div>
        </div>
        <div className="footer_right">
          <h6>Name</h6>
          <input type="name" className="input" />
          <h6>Email</h6>
          <input type="email" className="input"  />
          <h6>Message</h6>
          <input type="message" className="input" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
