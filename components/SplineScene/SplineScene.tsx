'use client';

import Spline, { SplineEvent } from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { usePathname, useRouter } from 'next/navigation';
import { useSplineContext } from '@/context/SplineContext';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE ?? '';

const SplineScene = () => {
  const { splineRef } = useSplineContext();

  const router = useRouter();
  const pathname = usePathname();

  function onLoad(splineApp: Application) {
    splineRef.current = splineApp;
    const skills = splineRef.current.findObjectByName('skillsView');
    console.log(skills);

    if (pathname === '/about-me') {
      splineRef.current.emitEvent('mouseDown', 'aboutMeView');
    }
    if (pathname === '/skills') {
      splineRef.current.emitEvent('mouseDown', 'skillsView');
    }
    if (pathname === '/projects') {
      splineRef.current.emitEvent('mouseDown', 'projectsView');
    }
  }

  function onMouseDown(e: SplineEvent) {
    const targetName = e.target.name;
    if (targetName === 'aboutMeView') {
      router.push('/about-me');
    }
    if (targetName === 'skillsView') {
      router.push('/skills');
    }
  }

  return (
    <div className='reletive'>
      <div className='absolute top-0 left-[200px] right-0 bottom-0'>
        <Spline scene={scene} onLoad={onLoad} onMouseDown={onMouseDown} />
      </div>
    </div>
  );
};

export default SplineScene;
