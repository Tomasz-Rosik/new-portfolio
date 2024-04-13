'use client';
import AboutMeWrapper from '@/components/AboutMeView/AboutMeWrapper';
import SplineEventButton from '@/components/AboutMeView/SplineEventButton';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const AboutMe = () => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <AboutMeWrapper>
          <div className='absolute top-12 right-1/2'>
            <SplineEventButton
              target={'aboutMeView'}
              event={'mouseDown'}
              setOpen={setOpen}
            />
          </div>
          <div className='max-w-[50%] w-full flex flex-col items-center px-9 py-12 gap-7'>
            <h1>Hi am Tomasz Rosik</h1>
            <h1>Front-End Developer</h1>
            <div className=''>
              <span className='blob'></span>
              <p className='glassCard p-12 max-w-3xl text-xl text-gray-100'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </AboutMeWrapper>
      )}
    </AnimatePresence>
  );
};

export default AboutMe;
