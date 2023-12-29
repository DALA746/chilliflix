'use client';
import Image from 'next/image';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

export default function Slider({ movies, title }) {
  // TODO: hide left arrow when at the start of a slider
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    const leftArrow = document.getElementById('left-arrow');
    // if (slider.scrollLeft === 0) {
    //   leftArrow.style.visibility = 'hidden';
    // } else {
    //   leftArrow.style.visibility = 'none';
    // }

    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="pb-4 text-xl">{title}</h2>
      <div className="relative flex flex-row items-center">
        <MdChevronLeft
          id="left-arrow"
          className={`opacity-50 cursor-pointer hover:opacity-100 absolute z-10`}
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies &&
            movies.map((movie) => (
              <Link key={movie.id} href={`/details/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 absolute right-1 z-10"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}
