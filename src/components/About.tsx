'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const geist = localFont({
  src: '../../public/fonts/Geist-Thin.otf',
});

const blurVariant = {
  initial: {
    filter: 'blur(10px)',
    opacity: 0,
    y: 20
  },
  animate: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={blurVariant}
            className={`${geist.className} text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight`}
          >
            Web Developer
          </motion.h1>
          <motion.p
            variants={blurVariant}
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
                Hi, I<span>&apos;</span>m Ashish Lamichaney<br/><br/>
                Fullstack Developer | Builder of Scalable Web Solutions<br/><br/>
                I<span>&apos;</span>m a passionate Fullstack Developer with hands-on experience in crafting responsive, high-performance web applications using modern technologies like Next.js, React, Node.js, and Tailwind CSS. My work focuses on clean architecture, optimized user experience, and seamless integrations — from frontend animations to backend APIs.
                Currently based in Sikkim, India, I bring a unique blend of creativity, precision, and problem-solving to every project. 
                Let<span>&apos;</span>s build something impactful.
          </motion.p>
          <motion.div
            variants={blurVariant}
            className="mt-10 flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-slate-800 px-6 py-3 text-white hover:bg-slate-600 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-gray-300 dark:border-gray-700 px-6 py-3 hover:border-slate-600 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 