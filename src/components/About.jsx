import { motion } from 'framer-motion';

const expertise = [
  'Proficient in MERN stack & REST APIs',
  'Passionate about UI/UX and performance'
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 bg-gradient-to-br from-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-blue-200 via-blue-600 to-indigo-900 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      <motion.p
        whileHover={{ scale: 1.03 }}
        className="text-lg md:text-xl text-neutral-700 max-w-2xl mb-8 transition-transform duration-200 cursor-pointer"
      >
        I am a passionate full stack developer specializing in the MERN stack. I love building modern, performant, and user-friendly web applications. Always eager to learn new technologies and solve real-world problems with code.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-6">
        {expertise.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.07, rotate: 1 }}
            className="bg-gradient-to-br from-slate-200 to-neutral-100 p-[2px] rounded-xl shadow-lg"
          >
            <div className="bg-blue-500 dark:bg-gray-950 rounded-xl px-6 py-4 text-white font-semibold text-center min-w-[220px]">
              {item}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About; 