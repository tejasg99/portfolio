import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const socials = [
  { icon: <FaGithub />, url: 'https://github.com/tejasg99' },
  { icon: <FaLinkedin />, url: 'www.linkedin.com/in/tejas-gawade-97t' },
  { icon: <FaEnvelope />, url: 'mailto:tgawade092@gmail.com' },
  { icon: <FaXTwitter />, url: 'https://x.com/Tejas9_'}
];

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <div className="flex mb-2 md:mb-0">
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        type="button" 
        className='flex items-center gap-1 cursor-pointer'
        >
          Scroll to Top
          <FaArrowUpLong className="inline-block text-lg" />
        </button>
      </div>
      <div className="text-gray-800 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()}</div>
      <div className="flex gap-3">
        {socials.map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xl text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer; 