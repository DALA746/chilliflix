'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FETCH_URL } from '../utils/urls';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Slider from './Slider';
import { Suspense } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(FETCH_URL);
      const data = await res.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  // TODO: add loading

  return (
    <div className="m-2">
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <Slider movies={movies} title="Populära filmer" />
      </Suspense>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
