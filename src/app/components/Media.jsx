'use client';
import { useState, useEffect, useRef } from 'react';
import List from './List';
import Loading from '../loading';
import { usePathname } from 'next/navigation';

export default function Media({ fetchSeries, fetchMovies }) {
  // todo: pagination
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [title, setTitle] = useState('Popular');
  const dropdownRef = useRef(null);
  const seriesCategory = [
    { category: 'popular', title: 'Popular' },
    {
      category: pathname === '/movies' ? 'upcoming' : 'airing_today',
      title: pathname === '/movies' ? 'Upcoming' : 'Airing today'
    },
    { category: 'top_rated', title: 'Top rated' }
  ];

  const handleClick = async (item) => {
    setLoading(true);
    setIsOpen(false);
    setTitle(item.title);
    const { results } =
      pathname === '/series'
        ? await fetchSeries(item.category)
        : await fetchMovies(item.category);
    setResults(results);
    setLoading(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setTitle('Popular');
    setLoading(true);
    async function getData() {
      const { results } =
        pathname === '/series' ? await fetchSeries() : await fetchMovies();
      setResults(results);
    }
    getData();
    setLoading(false);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [fetchMovies, fetchSeries, pathname]);

  return (
    <div className="relative flex flex-col gap-7 h-screen">
      {loading && <Loading />}
      <div className="flex justify-start">
        <div ref={dropdownRef} className="relative w-full sm:max-w-sm">
          <div className=" w-full">
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {title}
            </button>
          </div>
          {isOpen && (
            <div className="w-full origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {seriesCategory.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => handleClick(item)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <List results={results} />
    </div>
  );
}
