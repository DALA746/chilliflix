'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import '../globals.css';

export default function HeroBanner({ movie }) {
  return (
    <div className="hidden sm:block fade-top-and-bottom relative ">
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt="/"
        width={780}
        height={300}
        className="h-full w-full object-cover rounded-md"
        priority
      />
      <div className="absolute inset-0 bg-gray-950 h-full w-full object-cover opacity-40 rounded-md"></div>
      <div className="absolute max-w-[500px] inset-0 flex items-start justify-center flex-col gap-6 ml-12 animate-fade-right animate-once animate-ease-linear">
        <h2 className="text-white text-5xl font-bold">{movie.title}</h2>
        <p className="">{movie.overview}</p>
        <Link href={`/details/${movie.id}`}>
          <button className="bg-red-600 text-white hover:bg-red-400 font-bold py-2 px-4 rounded inline-flex items-center gap-3">
            <span>More</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>
      {/* <svg
        class="animate-bounce w-6 h-6 text-gray-900"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg> */}
    </div>
  );
}
