import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Virtual Event Management System',
    desc: 'A Virtual Event Management Platform to host and manage events such as webinars, meetups, hackathons and more. It includes features like event creation, registration and live streaming using Jitsi meet.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Jitsi Meet', 'Redux-toolkit', 'TailwindCSS'],
    img: '/EventMan.png',
    github: '#',
    demo: '#',
    gradient: 'bg-gradient-to-br from-blue-800 via-blue-500 to-indigo-900',
  },
  {
    title: 'StreamTube - Video Streaming platform',
    desc: 'A video streaming platform built with React and TailwindCSS. It allows users to upload, view, and manage videos. Includes features like user authentication, video upload, and a responsive design.',
    tech: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'Mongoose', 'Redux-toolkit', 'JWT'],
    img: '/StreamTube.png',
    github: '#',
    demo: '#',
    gradient: 'bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-900'
  },
  {
    title: 'Youtube video downloader',
    desc: 'A webapp which uses distube/ytdl-core library to download video streams and then converts and merges them into a video using FFMPEG.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'distube/ytdl-core', 'ffmpeg'],
    img: 'YTD.png',
    github: '#',
    demo: '#',
    gradient: 'bg-gradient-to-br from-rose-600 via-rose-400 to-red-500'
  },
  {
    title: 'Portfolio website',
    desc: 'A portfolio website with smooth animations, responsive design, and a modern layout to showcase projects and skills.',
    tech: ['React', 'Vite', 'TailwindCSS'],
    img: '/Portfolio.png',
    github: '#',
    demo: '#',
    gradient: 'bg-gradient-to-br from-amber-500 via-amber-300 to-yellow-400'
  },
];
// Different gradients for each project card to be added
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-5 py-10 md:px-40 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 mb-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-4xl border border-neutral-900 shadow-xl hover:shadow-2xl cursor-pointer p-0"
          >
            <div className={`${project.gradient} dark:bg-gray-950 rounded-4xl overflow-hidden`}>
              <img src={project.img} alt={project.title} className="w-full h-60 object-fill" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="border border-white text-xs text-white px-2 py-1 rounded-full font-semibold shadow">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-lg"><FaGithub /></a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-lg"><FaExternalLinkAlt /></a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 