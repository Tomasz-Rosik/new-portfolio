'use client';

import { useSplineContext } from '@/context/SplineContext';
import { SplineEventName } from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

type SplineEventButtonProps = {
  target: string;
  setClose?: Dispatch<SetStateAction<boolean>>;
};

const SplineEventButton = ({ target, setClose }: SplineEventButtonProps) => {
  const { splineRef } = useSplineContext();
  const router = useRouter();

  const handleClick = () => {
    splineRef.current?.emitEvent('mouseDown', target);
    if (setClose) setClose(true);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      initial={{ y: '-1000%' }}
      animate={{ y: '0' }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='font-semibold tracking-[2px] text-xl rounded-full px-5 py-2 outline hover:text-hover'
      onClick={handleClick}>
      BACK
    </motion.button>
  );
};

export default SplineEventButton;
