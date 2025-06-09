'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import localFont from 'next/font/local';

const canopee = localFont({
  src: '../../../public/fonts/Canopee Regular.otf',
});

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex flex-col justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Toggle Menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className={`w-10 h-0.5 block transition-transform ${isOpen ? 'bg-white' : 'bg-black'}`}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className={`w-10 h-0.5 block ${isOpen ? 'bg-white' : 'bg-black'}`}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className={`w-10 h-0.5 block transition-transform ${isOpen ? 'bg-white' : 'bg-black'}`}
        />
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black dark:bg-gray-900 z-40"
          >
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="h-screen flex flex-col items-center justify-center"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`${canopee.className} text-4xl sm:text-7xl font-normal py-4 hover:text-white text-slate-500 transition-colors inline-block`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 