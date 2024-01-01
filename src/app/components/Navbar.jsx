'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GiChiliPepper } from 'react-icons/gi';
import '../globals.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: '/' },
    {
      name: 'TV Series',
      href: '/series'
    },
    {
      name: 'Movies',
      href: '/movies'
    }
  ];
  return (
    <nav className="flex flex-row gap-5 items-center my-12 mr-0 ml-6 sm:ml-12 relative z-10">
      <div className="flex flex-row gap-2 items-center">
        <GiChiliPepper color="red" size={30} />
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            className={`flex flex-col items-center justify-center gap-2 ${
              pathname === link.href && 'font-bold text-red-600'
            }`}
            key={link.name}
            href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
