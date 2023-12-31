import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Garage Parrot',
  description: 'Bienvenu sur le site du Garage Parrot',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
