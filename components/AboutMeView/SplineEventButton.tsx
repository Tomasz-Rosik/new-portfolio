'use client';

import { useSplineContext } from '@/context/SplineContext';
import { SplineEventName } from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type SplineEventButtonProps = {
  target: string;
  event: SplineEventName;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SplineEventButton = ({
  target,
  event,
  setOpen,
}: SplineEventButtonProps) => {
  const { splineRef } = useSplineContext();
  const router = useRouter();

  const handleClick = () => {
    splineRef.current?.emitEventReverse(event, target);
    setOpen(false);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };
  return (
    <button
      className='font-semibold text-3xl rounded-full px-12 py-8 outline'
      onClick={handleClick}>
      BACK
    </button>
  );
};

export default SplineEventButton;
