'use client';

import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx([
          inter.variable,
          'h-screen bg-gray-200 font-sans text-gray-900',
          'dark:bg-gray-800 dark:text-gray-100',
        ])}
      >
        <ThemeProvider defaultTheme={'dark'} attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
