import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  // Smooth scroll to section
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  // Basic scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop - 80 <= scrollY) {
          current = link.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-2xl rounded-full bg-gray dark:bg-gray-900/40 backdrop-blur-md shadow-lg flex justify-center items-center py-2 px-4 gap-2 md:gap-6 border border-neutral-300"
    >
      {navLinks.map(link => (
        <button
          key={link.id}
          onClick={() => handleNavClick(link.id)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-colors duration-200 hover:cursor-pointer hover:bg-white/70 hover:border hover:border-neutral-700 dark:hover:bg-gray-700/40 focus:outline-none ${active === link.id ? 'bg-gradient-to-b from-zinc-300 via-neutral-600 to-stone-900 text-white shadow-md' : 'text-gray-800 dark:text-gray-200'}`}
        >
          <span className="text-lg">{link.icon}</span>
          <span className="hidden sm:inline">{link.label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default Navbar; 