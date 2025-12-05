import hero_banner from '../assets/images/hero_banner_image.png'
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="Header-hero">
      <div className="Header-banner">
        <div className='angular_section'>
        <h1>Nikhil Thakur</h1>
        <img src={hero_banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
