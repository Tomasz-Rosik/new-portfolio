import { ReactNode } from 'react';
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper';

const variants = {
  initial: { x: '100%', transition: { duration: 1.6 } },
  animate: { x: '0', transition: { duration: 1 } },
  exit: { x: '100%', transition: { duration: 0.5 } },
};

const SkillsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimationWrapper variants={variants} invert splineTarget='skillsReverse'>
      <div className='relative w-1/2 py-12 px-12 overflow-auto'>
        <div className='flex flex-col gap-20 text-gray-400 justify-center'>
          {children}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default SkillsWrapper;
