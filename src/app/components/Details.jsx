'use client';
import Image from 'next/image';
import '../globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Details({ movie }) {
  const params = usePathname();
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt={params.includes('series') ? movie.name : movie.title}
        width={780}
        height={300}
        className="h-full w-full object-cover rounded-md"
        priority
      />
      <div className="absolute inset-0 bg-slate-950 opacity-70 rounded-md"></div>
      <div className="absolute max-w-[500px] inset-0 flex items-start justify-center flex-col gap-6 ml-6 mr-6 sm:ml-12">
        <h2 className="text-white text-5xl font-bold">
          {params.includes('series') ? movie.name : movie.title}
        </h2>
        <p className="italic">{movie.tagline}</p>
        <p className="">{movie.overview}</p>
        {movie.homepage && (
          <Link href={movie.homepage} className="underline hover:text-red-500">
            <p>Homepage</p>
          </Link>
        )}
        <p className="bg-orange-500 p-1 font-bold rounded w-[47px] text-center">
          {Math.round(movie.vote_average * 100) / 100}
        </p>
        <div className="flex flex-row gap-2">
          {movie.genres &&
            movie.genres.map((genre) => (
              <div key={genre.id} className="bg-red-600 font-bold p-1 rounded">
                <span>{genre.name}</span>
              </div>
            ))}
        </div>

        <p>
          <span className="font-bold">
            {params.includes('series') ? 'First year date: ' : 'Release date: '}
          </span>{' '}
          {params.includes('series')
            ? movie.first_air_date
            : movie.release_date}
        </p>
      </div>
    </>
  );
}
