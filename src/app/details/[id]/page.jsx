import { DETAILS_URL, API_DETAILS_URL } from '@/app/utils/urls';
import Image from 'next/image';
import '../../globals.css';
import Link from 'next/link';

async function fetchDetails(id) {
  const res = await fetch(API_DETAILS_URL('movie', id));
  return res.json();
}

export default async function Details({ params }) {
  const { id } = params;
  const movie = await fetchDetails(id);
  console.log(movie, 'movie');

  return (
    <main className="absolute top-0 z-0 w-full h-screen  flex flex-row gap-6">
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt={movie.title}
        width={780}
        height={300}
        className="h-full w-full object-cover rounded-md"
        priority
      />
      <div className="absolute inset-0 bg-slate-950 opacity-70 rounded-md"></div>
      <div className="absolute max-w-[500px] inset-0 flex items-start justify-center flex-col gap-6 ml-6 mr-6 sm:ml-12">
        <h2 className="text-white text-5xl font-bold">{movie.title}</h2>
        <p className="italic">{movie.tagline}</p>
        <p className="">{movie.overview}</p>
        {movie.homepage && (
          <Link href={movie.homepage} className="underline hover:text-red-500">
            <p>Homepage</p>
          </Link>
        )}
        <p className="bg-orange-300 p-1 text-black font-bold rounded">
          {Math.round(movie.vote_average * 100) / 100}
        </p>
        <div className="flex flex-row gap-2">
          {movie.genres &&
            movie.genres.map((genre) => (
              <div
                key={genre.id}
                className="bg-slate-500 font-bold p-1 rounded">
                <span>{genre.name}</span>
              </div>
            ))}
        </div>

        <p>
          <span className="font-bold">Release Date:</span> {movie.release_date}
        </p>
      </div>
    </main>
  );
}
