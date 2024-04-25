'use client';

import SplineEventButton from '@/components/Buttons/SplineEventButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PageBgEffect from '../PageBgEffect';

const ContactWrapper = ({ children }: { children: React.ReactNode }) => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.div
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{
            clipPath: 'circle(80% at 50% 50%)',
            transition: { duration: 1, delay: 2.5 },
          }}
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.3, delay: 0 },
          }}
          className='absolute w-full h-full flex justify-center items-center z-20 bg-mainBg'>
          <div className='absolute top-12 right-20 z-30 text-grayLight'>
            <SplineEventButton
              target={'contactMeReverse'}
              setClose={setClose}
            />
          </div>
          <PageBgEffect />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactWrapper;
