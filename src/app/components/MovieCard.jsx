'use client';
import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="w-[300px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={movie.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </>
  );
}
