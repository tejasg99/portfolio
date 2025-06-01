import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaGithub />, url: '#' },
  { icon: <FaLinkedin />, url: '#' },
  { icon: <FaEnvelope />, url: 'mailto:your@email.com' },
  { icon: <FaXTwitter />, url: '#'}
];

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col md:flex-row items-center justify-between px-6 gap-4">
      <div className="flex gap-4 mb-2 md:mb-0">
        {links.map(link => (
          <a key={link.label} href={link.href} className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-100 font-medium transition-colors text-sm">
            {link.label}
          </a>
        ))}
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