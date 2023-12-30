'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiChiliPepper } from 'react-icons/gi';

export default function Navbar({ movies }) {
  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    const random = movies[Math.floor(Math.random() * movies.length)];
    setRandomMovie(random);
  }, [movies]);

  return (
    <div className="h-[400px] bg-slate-300">
      <Image
        key={randomMovie.id}
        src={`https://image.tmdb.org/t/p/w780/${randomMovie.backdrop_path}`}
        alt="/"
        width={780}
        height={500}
        className="w-full h-full"
        priority
      />
    </div>
  );
}
