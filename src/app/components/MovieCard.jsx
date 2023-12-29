'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FETCH_URL } from '../utils/urls';
import { Suspense } from 'react';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  useEffect(() => {}, []);

  return (
    <div className="w-[300px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <Image
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={movie.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
        />
      </Suspense>
    </div>
  );
}
