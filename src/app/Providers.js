'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-800 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
