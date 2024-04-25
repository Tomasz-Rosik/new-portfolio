import { useSplineContext } from '@/context/SplineContext';
import { usePathname, useRouter } from 'next/navigation';
import { SplineEvent } from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { useState } from 'react';

const useSpline = () => {
  const { splineRef } = useSplineContext();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  function onLoad(splineApp: Application) {
    splineRef.current = splineApp;

    if (splineRef.current.findObjectByName('main-camera')) {
      setLoading(false);
    }

    if (pathname === '/about-me') {
      splineRef.current.emitEvent('mouseDown', 'aboutMeView');
    }
    if (pathname === '/skills') {
      splineRef.current.emitEvent('mouseDown', 'skillsView');
    }
    if (pathname === '/projects') {
      splineRef.current.emitEvent('mouseDown', 'projectsView');
    }
    if (pathname === '/contact') {
      splineRef.current.emitEvent('mouseDown', 'contactMeView');
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
    if (targetName === 'projectsView') {
      router.push('/projects');
    }
    if (targetName === 'projectsView') {
      router.push('/projects');
    }
    if (targetName === 'contactMeView') {
      router.push('/contact');
    }
  }

  return { onLoad, onMouseDown, loading };
};

export default useSpline;
