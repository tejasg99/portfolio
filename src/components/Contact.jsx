import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const socials = [
  { icon: <FaEnvelope />, label: 'Email', url: 'mailto:tgawade092@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/tejas-gawade-97t' },
  { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/tejasg99' },
  { icon: <FaXTwitter />, label: 'X', url: 'https://x.com/Tejas9_' },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  // Initialize EmailJS with the public key
  emailjs.init({ 
      publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      limitRate:{
        id: 'contact-form',
        throttle: 10000, // allow 1 request per 10seconds
      }
  })

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      e.target,
    ).then(
      (response) => {
        toast.success('Message sent successfully!');
        console.log('Message sent successfully:', response);
        setSubmitting(false);
      },
      (error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('Error sending message:', error);
        setSubmitting(false);
      }
    );
    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-br from-indigo-700 via-blue-500 to-indigo-700 bg-clip-text text-transparent"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-10 items-start w-full max-w-4xl mt-10">
        <div className="mx-auto md:mx-0 flex flex-col gap-4 mb-8 md:mb-0">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-black transition-colors">
              <span className="text-2xl">{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/60 dark:bg-gray-950 p-8 rounded-2xl shadow-lg w-full md:w-2/3">
          <motion.input
            whileFocus={{ scale: 1.04 }}
            name='name'
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-500 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
          />
          <motion.input
            whileFocus={{ scale: 1.04 }}
            name='email'
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-500 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
          />
          <motion.textarea
            whileFocus={{ scale: 1.04 }}
            name='message'
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-500 border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-transform duration-200 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? 'Sending...':'Send Message'}
          </motion.button>
        </form>
      </div>
      <div className='max-w-2xl mt-5 text-center p-5'>
        <p className='text-sm text-neutral-800 dark:text-neutral-400'>
          Note: This form sends the message as an email to me and is designed for business use only if you have any queries or want to discuss a project. Please do not use it for personal messages instead reach out to me via my social media links above.
        </p>
      </div>
    </section>
  );
};

export default Contact; 