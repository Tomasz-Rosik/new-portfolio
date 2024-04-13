import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BgGradient from '@/components/BgGradient';
import { SplineContextProvider } from '@/context/SplineContext';
import SplineScene from '@/components/SplineScene/SplineScene';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tomasz Rosik Portfolio',
  description: 'This is my new portfolio, created with next.js and Spline 3D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SplineContextProvider>
      <html lang='en'>
        <body className={inter.className}>
          <main className='w-screen h-screen relative'>
            <BgGradient />
            <SplineScene />
            {children}
          </main>
        </body>
      </html>
    </SplineContextProvider>
  );
}
