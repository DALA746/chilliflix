'use client';
import React, { useState, useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

export default function Slider({ movies, title }) {
  const [atStart, setAtStart] = useState();
  const [atEnd, setAtEnd] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    const updateArrowVisibility = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setAtStart(scrollLeft === 0);
        setAtEnd(scrollLeft + clientWidth === scrollWidth);
      }
    };

    containerRef.current?.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility();

    // Cleanup the event listener on component unmount
    return () => {
      containerRef.current?.removeEventListener(
        'scroll',
        updateArrowVisibility
      );
    };
  }, []);

  const slideLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  return (
    <div>
      <h2 className="pb-4 text-xl">{title}</h2>
      <div className="relative flex flex-row items-center">
        <MdChevronLeft
          className={`opacity-50 cursor-pointer hover:opacity-100 absolute z-10 ${
            atStart ? 'hidden' : ''
          }`}
          onClick={slideLeft}
          size={40}
        />
        <div
          className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide flex-row gap-5"
          ref={containerRef}
          style={{
            scrollBehavior: 'smooth',
            transition: 'scroll-left 0.5s ease-in-out'
          }}>
          {movies &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/details/${movie.id}`}
                className="relative">
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
        </div>
        <MdChevronRight
          className={`opacity-50 cursor-pointer hover:opacity-100 absolute right-1 z-10 ${
            atEnd ? 'hidden' : ''
          }`}
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}
