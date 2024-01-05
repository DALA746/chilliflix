import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { GiChiliPepper } from 'react-icons/gi';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChilliFlix',
  description: 'A spicy collection of awesome movies & TV series',
  icons: {
    icon: '/icon.ico' // /public path
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50 `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
