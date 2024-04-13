'use client';
import { motion } from 'framer-motion';

const variants = {
  initial: { x: '-100%', transition: { deley: 1.5, duration: 1.5 } },
  animate: { x: '0', transition: { deley: 1, duration: 1 } },
  exit: { x: '-100%', transition: { duration: 0.5 } },
};
const AboutMeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      variants={variants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      className='text-white w-full h-full aboutMeBg absolute flex items-center'>
      {children}
    </motion.section>
  );
};

export default AboutMeWrapper;
