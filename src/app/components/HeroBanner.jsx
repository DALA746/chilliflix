'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import '../globals.css';
import { IoArrowDownCircleOutline } from 'react-icons/io5';

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
        <Link href={`/${movie.name ? 'series' : 'movies'}/${movie.id}`}>
          <button className="bg-red-600 text-white hover:bg-red-400 font-bold py-2 px-4 rounded inline-flex items-center gap-3">
            <span>More</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>
      {/* <div className="hidden md:flex relative items-center justify-center">
        <IoArrowDownCircleOutline
          size={50}
          color="white"
          className="animate-bounce absolute bottom-12"
        />
      </div> */}
    </div>
  );
}
