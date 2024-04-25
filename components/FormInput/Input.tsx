import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  label: string;
}

const FormInput = ({ id, className, label, ...props }: InputProps) => {
  return (
    <div className={`relative mt-2`}>
      {label && (
        <label
          htmlFor={id}
          className='text-xs text-black900 leading-4 bg-white700 px-1 absolute bottom-[calc(100%-.5rem)] left-3 rounded-md z-10'>
          {label}
        </label>
      )}

      <input
        id={id}
        className={twMerge(
          `outline outline-1 outline-grey500 rounded-md px-4 py-[1.125rem] text-sm text-black500 disabled:outline-grey300 disabled:text-grey500 font-medium w-full placeholder:text-grey500 focus:outline-2 focus:outline-red500`,
          className
        )}
        {...props}
      />
      <p className='absolute text-xs'></p>
    </div>
  );
};

export default FormInput;
