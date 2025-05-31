import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
  { name: 'REST APIs', icon: <FaCode className="text-pink-400" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-700 bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex flex-col items-center justify-center p-5 rounded-xl shadow-lg bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 text-white min-w-[120px] min-h-[120px] cursor-pointer hover:shadow-2xl"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="font-semibold text-lg drop-shadow-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 