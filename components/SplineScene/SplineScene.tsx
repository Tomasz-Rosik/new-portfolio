'use client';

import Spline from '@splinetool/react-spline';
import useSpline from '@/hooks/useSpline';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE ?? '';

const SplineScene = () => {
  const { onLoad, onMouseDown } = useSpline();

  return (
    <div className='absolute top-0 left-0 w-full h-full z-10'>
      <Spline scene={scene} onLoad={onLoad} onMouseDown={onMouseDown} />
    </div>
  );
};

export default SplineScene;
