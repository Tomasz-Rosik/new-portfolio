'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SplineEventButton from '../Buttons/SplineEventButton';

export type AnimationVariants = {
  initial: {
    x: string;
    transition: {
      deley?: number;
      duration: number;
    };
  };
  animate: {
    x: string;
    transition: {
      deley?: number;
      duration: number;
    };
  };
  exit: {
    x: string;
    transition: {
      duration: number;
    };
  };
};

const AnimationWrapper = ({
  children,
  variants,
  invert = false,
  splineTarget,
}: {
  children: React.ReactNode;
  variants: AnimationVariants;
  invert?: boolean;
  splineTarget: string;
}) => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      {!close && (
        <motion.section
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className={twMerge(
            'text-white w-full h-full absolute flex flex-col z-20',
            invert
              ? 'right-side-half-width-gradient items-end'
              : 'left-side-half-width-gradient '
          )}>
          <div
            className={twMerge(
              'mb-20 px-8 py-8',
              invert ? 'self-end' : 'self-start'
            )}>
            <SplineEventButton target={splineTarget} setClose={setClose} />
          </div>
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AnimationWrapper;
