import Logo from './components/Logo.jsx';
import Navbar from './components/Navbar.jsx';
import HeroContent from './Pages/HeroContent.jsx';
import SocialIcon from './components/Social.jsx';
import AboutSection from './Pages/AboutSection.jsx';
import PortfolioSection from './Pages/PortfolioSection.jsx';
import ContactSection from './Pages/ContactSection.jsx';
import Lanyard from './components/Animation/Lanyard/Lanyard.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Logo />
        <SocialIcon />
        <HeroContent />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="portfolio">
        <PortfolioSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;