import React from 'react';
import '../styles/layoutBgColorEllipses.css';

const LayoutBgEffect = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-screen overflow-hidden'>
      <span className='layout-bg-ellips-1'></span>
      <span className='layout-bg-ellips-2'></span>
      <span className='layout-bg-ellips-3'></span>
      <span className='layout-bg-ellips-4'></span>
      <div className='blur-effect'></div>
    </div>
  );
};

export default LayoutBgEffect;
