'use client';

import { aboutMeData } from '@/statics/aboutMeData';
import { motion } from 'framer-motion';

const AboutMeContent = () => {
  const { lineOne, lineTwo, lineThree, desc } = aboutMeData;
  return (
    <div className='max-w-[50%] w-full h-full flex flex-col items-center px-9 py-12 overflow-hidden relative text-grayLight'>
      <motion.h1
        className='pb-1'
        initial={{ x: '-200%' }}
        animate={{ x: '0' }}
        transition={{ delay: 0.8, duration: 0.5 }}>
        {lineOne}
      </motion.h1>
      <motion.h1
        className='pb-1'
        initial={{ x: '-200%' }}
        animate={{ x: '0' }}
        transition={{ delay: 0.9, duration: 0.5 }}>
        {lineTwo}
      </motion.h1>
      <motion.h1
        className='pb-10'
        initial={{ x: '-200%' }}
        animate={{ x: '0' }}
        transition={{ delay: 1, duration: 0.5 }}>
        {lineThree}
      </motion.h1>
      <div>
        <span className='blob'></span>
        <motion.p
          initial={{ x: '-200%' }}
          animate={{ x: '0' }}
          transition={{ delay: 1, duration: 0.5 }}
          className='glass-card p-12 max-w-3xl text-xl text-justify'>
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutMeContent;
