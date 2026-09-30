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

import bgImage from './assets/bg.png';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-200 overflow-x-hidden selection:bg-accent-DEFAULT/30 selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-dark-900 -z-30"></div>
      
      {/* Animated Image Background */}
      <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden">
        <img src={bgImage} alt="abstract background" className="w-full h-full object-cover animate-bg-pan opacity-15 mix-blend-lighten" />
      </div>
      
      {/* Vibrant Animated Glowing Blobs - Dimmed Brightness */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-500/20 blur-[100px] -z-10 animate-blob mix-blend-screen"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/20 blur-[120px] -z-10 animate-blob-reverse mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-[30%] left-[50%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] -z-10 animate-blob mix-blend-screen" style={{ animationDelay: '4s' }}></div>
      <div className="fixed bottom-[20%] left-[10%] w-[35%] h-[35%] rounded-full bg-emerald-400/15 blur-[90px] -z-10 animate-blob-reverse mix-blend-screen" style={{ animationDelay: '1s' }}></div>
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-[-5]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

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
