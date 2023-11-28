import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDb',
  description: 'This is a clone of IMDb.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/*  header */}
          <Header />

          {/* navbar */}

          {/* searchbox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
