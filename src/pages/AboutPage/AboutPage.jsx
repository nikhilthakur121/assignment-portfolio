import '../AboutPage/AboutPage.css' 
import Aboutpage_image from '../assets/images/Aboutpage_image.png'
const AboutPage = () => {
  return (
    <div className='Aboutpage-container'id='about'>
        <div className='Aboutpage-left_container'>
            <img src={Aboutpage_image} alt="about" />
        </div>
        <div className='Aboutpage-right_container'>
            <h3>About Me</h3>
            <p>I'm a passionate web developer with a strong eye for <br />design and detail.
                My work focuses on creating seamless <br />digital experiences through efficient code and <br />
                thoughtful user interfaces. <br />
                Over the past few years, I've collaborated with <br /> startups and agencies to build websites that are not <br />
                only beautiful but also optimized for performance and scalability. <br /> <br />
                When I'm not coding you'll find me experimenting with <br /> UI animations, learning new frameworks, or exploring <br />
                web accessibility improvements.                
            </p>
            <h2>Nikhil Thakur</h2>
        </div>
    </div>
  )
}

export default AboutPage