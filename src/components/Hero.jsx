import { motion } from 'framer-motion';
import { FaDownload, FaProjectDiagram } from 'react-icons/fa';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf';
  link.download = 'Tejas_Gawade_Resume.pdf'; // file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.removeChild(link);
}

const Hero = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center min-h-screen text-center bg-gradient-to-b from-white/50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-blue-200 via-blue-600 to-indigo-900 bg-clip-text text-transparent mb-4 p-3"
      >
        Tejas Gawade
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2"
      >
        Full Stack Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-lg md:text-xl text-neutral-700 max-w-xl mb-8"
      >
        Building modern, scalable web apps with a touch of creativity.<br />Let's turn ideas into reality!
      </motion.p>
      <div className='flex flex-col md:flex-row gap-6'>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-blue-900 via-blue-500 to-indigo-700 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          <FaProjectDiagram /> View Projects
        </motion.a>        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 hover:cursor-pointer rounded-full bg-gradient-to-br from-green-700 via-green-500 to-green-700 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          <FaDownload /> Download Resume
        </motion.button>     
      </div>

    </section>
  );
};

export default Hero; 