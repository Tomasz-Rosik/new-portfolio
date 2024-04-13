'use client';

import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import type { Application } from '@splinetool/runtime';

interface MyContextType {
  splineRef: MutableRefObject<Application | null>;
  currentSplineView: string;
  setCurrentSplineView: Dispatch<SetStateAction<string>>;
}
const SplineContext = createContext<MyContextType>({
  splineRef: { current: null },
  currentSplineView: '',
  setCurrentSplineView: () => {},
});

export const SplineContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const splineRef = useRef<Application | null>(null);
  const [currentSplineView, setCurrentSplineView] = useState('');
  return (
    <SplineContext.Provider
      value={{ splineRef, currentSplineView, setCurrentSplineView }}>
      {children}
    </SplineContext.Provider>
  );
};

export const useSplineContext = () => useContext(SplineContext);
