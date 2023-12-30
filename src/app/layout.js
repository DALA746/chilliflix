import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChiliFlix',
  description: 'A spicy collection of great movies & TV series'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-50 `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
