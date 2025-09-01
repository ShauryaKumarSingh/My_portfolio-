// components/Header.jsx
import { useState } from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileNav();
  };

  return (
    <>
      <header>
        <div className="container nav-container">
          <a href="#" className="logo">
            <i className="fas fa-bolt"></i>
            devConnect
          </a>
          
          <nav className="nav-links">
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
          
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          
          <button className="menu-toggle" onClick={toggleMobileNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileNavActive ? 'active' : ''}`}>
        <button className="close-menu" onClick={closeMobileNav}>
          <i className="fas fa-times"></i>
        </button>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;