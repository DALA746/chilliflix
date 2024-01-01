'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MovieCard({ movie, index }) {
  const pathname = usePathname();
  const showTop10 = movie.name && pathname === '/';

  // TODO: make image url into reusable url, move to urls.js
  return (
    <Link
      key={movie.id}
      href={`/${movie.name ? 'series' : 'movies'}/${movie.id}`}
      className="relative">
      <div className="relative w-[200px] flex flex-row cursor-pointer hover:scale-105 ease-in-out duration-300">
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={movie.title ? movie.title : movie.name}
          width={780}
          height={400}
          className="object-cover"
          priority
        />
        {showTop10 && (
          <>
            <div className="absolute inset-0  h-full w-full object-cover opacity-0"></div>
            <div className="absolute top-0 max-w-[500px] inset-0 flex items-start justify-start flex-col gap-6">
              <h2 className="text-white text-5xl h-full font-bold bg-red-600 p-2">
                {index + 1}
              </h2>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
