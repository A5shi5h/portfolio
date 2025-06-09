'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const geist = localFont({
  src: '../../public/fonts/Geist-Thin.otf',
});

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js' , 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    category: 'Tools & Others',
    items: ['Git' , 'AWS' , 'Agile/Scrum'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`${geist.className} text-3xl sm:text-6xl font-extrabold mb-4`}>Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl">
            Here are the technologies and tools I work with to build amazing applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: groupIndex * 0.1 + index * 0.05,
                    }}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 