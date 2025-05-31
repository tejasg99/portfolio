import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaEnvelope />, label: 'Email', url: 'mailto:your@email.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', url: '#' },
  { icon: <FaGithub />, label: 'GitHub', url: '#' },
  { icon: <FaXTwitter />, label: 'X', url: '#' },
  { icon: <FaInstagram />, label: 'Instagram', url: '#' },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-10 items-start w-full max-w-4xl mt-10">
        <div className="mx-auto md:mx-0 flex flex-col gap-4 mb-8 md:mb-0">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-neutral-600 hover:text-black transition-colors">
              <span className="text-2xl">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
        <form className="flex flex-col gap-4 bg-white/60 dark:bg-gray-950/80 p-8 rounded-2xl shadow-lg w-full md:w-2/3">
          <motion.input
            whileFocus={{ scale: 1.04 }}
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg text-neutral-900 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
          />
          <motion.input
            whileFocus={{ scale: 1.04 }}
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg text-neutral-900 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
          />
          <motion.textarea
            whileFocus={{ scale: 1.04 }}
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg text-neutral-900 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-transform duration-200"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 