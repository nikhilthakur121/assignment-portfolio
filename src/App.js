import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Skills from './pages/Skills/Skills';
import Journey from './pages/Journey/Journey';
import Projects from './pages/Projects/Projects';
import Testimonials from './pages/Testimonials/Testimonials';


function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/><Header/>
      <AboutPage/>
      <Skills/>
      <Journey/>
      <Projects/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
