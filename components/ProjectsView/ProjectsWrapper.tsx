'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import PageBgEffect from '../PageBgEffect';

const ProjectsWrapper = ({ children }: { children: ReactNode }) => {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.section
      initial={false}
      animate={
        isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 3.2 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className='absolute top-0 left-0 w-full h-full z-20 grid place-items-center bg-mainBg'>
      <PageBgEffect />
      {children}
    </motion.section>
  );
};

export default ProjectsWrapper;
