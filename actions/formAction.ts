'use server';

import { sendMail } from '@/lib/sendMail';
import { revalidatePath } from 'next/cache';

export const contactMeAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const body = `<div><h1>Portfolio message</h1><p>From:${name}</p>Message: ${message}<p></p></div>`;

  if (name && message) {
    const res: { message: string; status: boolean } = await sendMail({
      name,
      body,
    });

    if (res.status) {
      revalidatePath('/contact');
    }
    return res;
  }
};
