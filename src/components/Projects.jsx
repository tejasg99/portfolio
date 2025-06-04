import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Virtual Event Management System',
    desc: 'A Virtual Event Management Platform to host and manage events such as webinars, meetups, hackathons and more. It includes features like event creation, registration and live streaming using Jitsi meet.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Jitsi Meet', 'Redux-toolkit', 'TailwindCSS'],
    img: '/EventMan.png',
    frontend: 'https://github.com/tejasg99/virtual-EMS-frontend',
    backend: 'https://github.com/tejasg99/virtual-EMS-backend',
    gradient: 'bg-gradient-to-br from-blue-800 via-blue-500 to-indigo-900',
  },
  {
    title: 'StreamTube - Video Streaming platform',
    desc: 'A video streaming platform built with React and TailwindCSS. It allows users to upload, view, and manage videos. Includes features like user authentication, video upload, and a responsive design.',
    tech: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'Mongoose', 'Redux-toolkit', 'JWT'],
    img: '/StreamTube.png',
    frontend: 'https://github.com/tejasg99/StreamTube-frontend',
    backend: 'https://github.com/tejasg99/StreamTube-backend',
    demo: 'https://visitstreamtube.vercel.app/',
    gradient: 'bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-900'
  },
  {
    title: 'Youtube video downloader',
    desc: 'A webapp which uses distube/ytdl-core library to download video streams and then converts and merges them into a video using FFMPEG.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'distube/ytdl-core', 'ffmpeg'],
    img: 'YTD.png',
    frontend: 'https://github.com/tejasg99/youtube-downloader-frontend',
    backend: 'https://github.com/tejasg99/youtube-downloader-backend',
    gradient: 'bg-gradient-to-br from-rose-600 via-rose-400 to-red-500'
  },
  {
    title: 'Portfolio website',
    desc: 'A portfolio website with smooth animations, responsive design, dark mode support and a modern layout to showcase projects and skills.',
    tech: ['React', 'Vite', 'TailwindCSS'],
    img: '/Portfolio.png',
    frontend: 'https://github.com/tejasg99/portfolio',
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
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-br from-indigo-700 via-blue-500 to-indigo-700 bg-clip-text text-transparent"
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
                <div className="flex flex-wrap gap-2">
                  <button className='flex items-center gap-1 text-white px-2 py-1 border border-white rounded-full hover:cursor-pointer hover:text-gray-300' onClick={() => window.open(project.frontend, '_blank')}>
                    Frontend
                    <FaGithub className="text-lg hover:text-gray-300" />
                  </button>
                  {project.backend && (
                    <button className='flex items-center gap-1 text-white px-2 py-1 border border-white rounded-full hover:cursor-pointer hover:text-gray-300' onClick={() => window.open(project.backend, '_blank')}>
                      Backend
                      <FaGithub className="text-lg hover:text-gray-300" />
                    </button>
                  )}
                  {project.demo && (
                    <button className='flex items-center gap-1 text-white px-2 py-1 border border-white rounded-full hover:cursor-pointer hover:text-gray-300' onClick={() => window.open(project.demo, '_blank')}>
                      Live Link
                      <FaExternalLinkAlt className="text-md hover:text-gray-300" />
                    </button>                   
                  )}
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