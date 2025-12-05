import "../Testimonials/Testimonials.css";
import Testimonial1 from "../assets/images/testimonial1.jpg";
import Testimonial2 from "../assets/images/testimonial2.jpg";
const Testimonials = () => {
  return (
    <div className="testimonial_container" id="testimonial">
      <h3>Testimonials</h3>
      <div className="testimonials">
        <img src={Testimonial1} alt="" />
        <img src={Testimonial2} alt="" />
        <img src={Testimonial1} alt="" />
        <img src={Testimonial2} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
