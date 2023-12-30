'use client';
import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="relative w-[300px] cursor-pointer hover:scale-105 ease-in-out duration-300">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={movie.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
          <p className="text-wrap text-white drop-shadow-2xl">{movie.title}</p>
        </div>
      </div>
    </>
  );
}
