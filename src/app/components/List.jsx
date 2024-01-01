'use client';
import Image from 'next/image';
import Link from 'next/link';
import MovieCard from './MovieCard';

export default function List({ results }) {
  return (
    <div className="flex flex-row flex-wrap item-start gap-5">
      {results &&
        results.map((serie) => <MovieCard key={serie.id} movie={serie} />)}
    </div>
  );
}
