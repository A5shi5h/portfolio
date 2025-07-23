'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Image from 'next/image';

const geist = localFont({
  src: '../../public/fonts/Geist-Thin.otf',
});

const projects = [
  {
    title: 'Project 1',
    description: 'A clone of the popular website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project1.png',
    link: 'https://a5shi5h.github.io/significo-clone/',
  },
  {
    title: 'Project 2',
    description: 'A responsive modern website for a cafe',
    tech: ['NextJS', 'Gsap', 'Lenis'],
    image: '/images/project2.png',
    link: 'https://aro-cafe.vercel.app/',
  },
  {
    title: 'Project 3',
    description: 'E-commerce platform with payment integration.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: '/project3.jpg',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`${geist.className} text-3xl sm:text-6xl font-extrabold mb-4 text-white`}>Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-transparent rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={500} 
                  height={500} />
              </div>
              <div className="p-6">
                <h3 className={`${geist.className} text-2xl font-semibold mb-2 text-white`}>{project.title}</h3>
                <p className="text-gray-400 mb-4 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm bg-slate-200 text-black rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-white"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 