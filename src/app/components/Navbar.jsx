'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GiChiliPepper } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-5 items-center mb-12 my-12 mr-0 ml-12">
      <div className="flex flex-row gap-2 items-center">
        <GiChiliPepper color="red" size={50} />
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/series">TV Series</Link>
        <Link href="/movies">Movies</Link>
        {/* <Link href="/">Nytt och populärt</Link>
        <Link href="/">Bläddra efter språk</Link> */}
      </div>
    </nav>
  );
}
