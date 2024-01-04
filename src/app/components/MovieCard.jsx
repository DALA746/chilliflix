'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '.././globals.css';

export default function MovieCard({ movie, index }) {
  const pathname = usePathname();
  const homePage = pathname === '/';
  console.log(homePage);
  const showTop10 = movie.name && pathname === '/';

  // TODO: make image url into reusable url, move to urls.js
  return (
    <Link
      key={movie.id}
      href={`/${movie.name ? 'series' : 'movies'}/${movie.id}`}
      className={`relative cursor-pointer ${
        homePage && 'w-[300px] md: w–[300px]'
      }`}>
      <div
        className={`relative flex flex-row w-full hover:scale-105 ease-in-out duration-300 ${
          homePage && 'w-[300px] md: w–[300px]'
        }`}>
        {showTop10 && (
          <>
            <div className="h-auto bg-red-600 flex items-start justify-start text-center flex-col gap-6">
              <h2 className="text-white text-5xl font-bold p-2 h-auto">
                {index + 1}
              </h2>
            </div>
          </>
        )}
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          alt={movie.title ? movie.title : movie.name}
          width={780}
          height={400}
          className="object-cover"
          priority
        />
      </div>
    </Link>
  );
}
