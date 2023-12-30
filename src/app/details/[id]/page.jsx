import { DETAILS_URL } from '@/app/utils/urls';
import Image from 'next/image';
import '../../globals.css';

async function fetchDetails(id) {
  const res = await fetch(DETAILS_URL(id));
  return res.json();
}

export default async function Details({ params }) {
  const { id } = params;
  const movie = await fetchDetails(id);
  console.log(movie);

  return (
    <div className="">
      <Image
        src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
        alt={movie.title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto object-cover fade"
        priority
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.release_date}</p>
    </div>
  );
}
