import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-xl font-bold text-white tracking-wide">
          Periyasamy N
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`transition-colors duration-200 hover:text-accent-light ${activeSection === link.href.substring(1) ? 'text-accent-DEFAULT' : 'text-gray-300'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/assets/documents/Periyasamy_N_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-accent-DEFAULT text-accent-DEFAULT hover:bg-accent-DEFAULT hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-dark-700 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <ul className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block text-lg font-medium transition-colors duration-200 ${activeSection === link.href.substring(1) ? 'text-accent-DEFAULT' : 'text-gray-300 hover:text-accent-light'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-4">
            <a
              href="/assets/documents/Periyasamy_N_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full bg-accent-DEFAULT text-white font-medium hover:bg-accent-light transition-colors"
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
