import React from 'react';
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
  return (
    <div className="app-wrapper">
      <Navbar />
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
