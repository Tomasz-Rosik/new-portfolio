import { contactMeAction } from '@/actions/formAction';
import { createRef } from 'react';

const ContactForm = async () => {
  const formRef = createRef<HTMLFormElement>();

  const send = async (formData: FormData) => {
    'use server';
    const res = await contactMeAction(formData);

    res?.status ? formRef.current?.reset() : null;
  };

  return (
    <form
      action={send}
      className='glass-card px-14 py-14 max-w-[400px] flex flex-col items-center gap-3'>
      <h3 className='font-bold text-grayLight pb-5'>Contact Me</h3>
      <div className={`relative pt-6  w-full`}>
        <label
          htmlFor={'name'}
          className='text-base text-grayLight leading-4 px-1 absolute top-0 z-10'>
          {'Name / Company'}
        </label>
        <input
          id={'name'}
          name='name'
          className={
            'text-lg focus:outline-2 focus:outline-hover active:outline-hover outline rounded-md outline-1 outline-grayLight px-4 py-3 text-grayLight font-medium w-full  bg-transparent'
          }
        />
      </div>
      <div className={`relative pt-6 w-full`}>
        <label
          htmlFor={'message'}
          className='text-base text-grayLight leading-4 px-1 absolute top-0 z-10'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          maxLength={300}
          className={
            'max-h-[400px] min-h-24 text-lg focus:outline-2 focus:outline-hover active:outline-hover outline rounded-md outline-1 outline-grayLight px-4 py-3 text-grayLight font-medium w-full  bg-transparent'
          }
        />
      </div>
      <button
        type='submit'
        className='text-white px-3 py-3 uppercase tracking-[2px] font-semibold text-lg hover:bg-hover bg-[#433A3A] w-full rounded-md'>
        send
      </button>
    </form>
  );
};

export default ContactForm;
