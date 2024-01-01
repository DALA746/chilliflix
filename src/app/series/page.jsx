import Image from 'next/image';
import Link from 'next/link';
import { GiChiliPepper } from 'react-icons/gi';
import { TV_SERIES_TOP_RATED_URL, API_URL } from '../utils/urls';
import MovieCard from '../components/MovieCard';
import Slider from '../components/Slider';

async function fetchSeries() {
  const res = await fetch(API_URL('tv', 'top_rated', 1));
  return res.json();
}

export default async function Series() {
  const { results } = await fetchSeries();

  return (
    <div className="flex flex-row flex-wrap item-center gap-5 justify-center">
      {results &&
        results.map((movie) => (
          <Link
            key={movie.id}
            href={`/details/${movie.id}`}
            className="relative">
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
    </div>
  );
}
