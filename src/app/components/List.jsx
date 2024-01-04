'use client';
import Image from 'next/image';
import Link from 'next/link';
import MovieCard from './MovieCard';

export default function List({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4">
      {results &&
        results.map((serie) => <MovieCard key={serie.id} movie={serie} />)}
    </div>
  );
}
