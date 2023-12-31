'use client';
import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="relative w-[200px] cursor-pointer hover:scale-105 ease-in-out duration-300">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={movie.title}
          width={780}
          height={400}
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}
