import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen relative font-sans text-gray-200">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-dark-900 -z-10"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
