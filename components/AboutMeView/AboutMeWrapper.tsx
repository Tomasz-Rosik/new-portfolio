import { ReactNode } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper';

const variants = {
  initial: { x: '-100%', transition: { deley: 1.5, duration: 1.5 } },
  animate: { x: '0', transition: { deley: 1, duration: 1 } },
  exit: { x: '-100%', transition: { duration: 0.5 } },
};

const AboutMeWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimationWrapper variants={variants} splineTarget='aboutMeReverse'>
      {children}
    </AnimationWrapper>
  );
};

export default AboutMeWrapper;
