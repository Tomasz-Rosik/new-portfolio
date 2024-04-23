import { experienced, triedOut } from '@/statics/skillsData';

const SkillsContent = () => {
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <h5 className='border-b-2 border-gray-400 pb-2 mb-4 uppercase'>
          experienced
        </h5>
        <div className='flex gap-4 flex-wrap text-gray-200'>
          {experienced.map((item, index) => (
            <span key={index} className='skill-glass-chip px-5 py-2 w-fit'>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h5 className='border-b-2 border-gray-400 pb-2 mb-4 uppercase'>
          tried out
        </h5>
        <div className='flex gap-3 flex-wrap text-gray-200'>
          {triedOut.map((item, index) => (
            <span key={index} className='skill-glass-chip px-5 py-2 w-fit'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
