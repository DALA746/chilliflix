'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GiChiliPepper } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-5 items-center">
      <div className="flex flex-row gap-2 items-center">
        <GiChiliPepper color="red" size={50} />
      </div>
      <div className="flex gap-4">
        <Link href="/">Hem</Link>
        <Link href="/series">Serier</Link>
        <Link href="/movies">Filmer</Link>
        {/* <Link href="/">Nytt och populärt</Link>
        <Link href="/">Bläddra efter språk</Link> */}
      </div>
    </nav>
  );
}
