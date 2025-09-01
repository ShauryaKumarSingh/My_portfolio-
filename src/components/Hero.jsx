// components/Hero.jsx
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Hello, I'm <span className="highlight">Shaurya Kumar singh</span></h1>
          <p>A passionate Web developer specializing in creating responsive and user-friendly web experiences with modern technologies.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn" onClick={() => scrollToSection('projects')}>View Projects</a>
            <a href="#contact" className="btn btn-outline" onClick={() => scrollToSection('contact')}>Contact Me</a>
          </div>
        </div>
        <div className="hero-image fade-in">
          {/* <img src="" alt="Profile" width="400" height="400" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;