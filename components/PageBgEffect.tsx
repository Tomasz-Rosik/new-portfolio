import '../styles/pageBgColorEllipses.css';

const PageBgEffect = () => {
  return (
    <div className='absolute w-full h-full overflow-hidden'>
      <span className='page-bg-ellips-1'></span>
      <span className='page-bg-ellips-2'></span>
      <span className='page-bg-ellips-3'></span>
      <span className='page-bg-ellips-4'></span>
    </div>
  );
};

export default PageBgEffect;
