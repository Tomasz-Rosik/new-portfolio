'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const initialProjectsArray = [
  {
    title: 'test1',
    text: 'test',
  },
  {
    title: 'test2',
    text: 'test',
  },
  {
    title: 'test3',
    text: 'test',
  },
  {
    title: 'test4',
    text: 'test',
  },
];

const ProjectsContent = () => {
  const [projectsArray, setProjectsArray] = useState(initialProjectsArray);

  const handleSelectProject = (projectIndex: number) => {
    const arr = projectsArray.filter((_, index) => index !== projectIndex);

    const newArray = [projectsArray[projectIndex], ...arr];

    setProjectsArray(newArray);
  };

  return (
    <motion.div className='max-w-[1280px] gridParent max-h-[70%]'>
      <AnimatePresence>
        {projectsArray.map((item, index) => (
          <motion.div
            onClick={() => handleSelectProject(index)}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { delay: 4.5, type: 'spring' },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.5 },
            }}
            layout
            key={item.title}
            className={twMerge(
              `project-glass-card p-5 gridChild${index} text-white overflow-hidden`,
              index > 0 ? 'text-base' : 'text-xl'
            )}>
            <motion.h1 className='mb-11'>{`Nazwa projectu ${item.title}`}</motion.h1>
            <motion.p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </motion.p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsContent;
