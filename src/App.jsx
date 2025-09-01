import { useState, useEffect } from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    fadeInObserver.observe(element);
  });
  
  return () => {
    fadeElements.forEach(element => {
      fadeInObserver.unobserve(element);
    });
  };
}, []);
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;