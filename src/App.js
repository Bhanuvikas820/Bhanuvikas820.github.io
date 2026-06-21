import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedProject from './sections/FeaturedProject';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import EngineeringApproach from './sections/EngineeringApproach';
import Direction from './sections/Direction';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ paddingTop: '128px' }}>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <EngineeringApproach />
        <Direction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
