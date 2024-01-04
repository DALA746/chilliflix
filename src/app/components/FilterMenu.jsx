'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import List from './List';

export default function FilterMenu({ fetchSeries }) {
  // todo: pagination
  // button back make
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState();
  const [title, setTitle] = useState('Popular');
  const dropdownRef = useRef(null);
  const seriesCategory = [
    { category: 'popular', title: 'Popular' },
    { category: 'airing_today', title: 'Airing today' },
    { category: 'top_rated', title: 'Top rated' }
  ];

  const handleClick = async (item) => {
    setIsOpen(false);
    setTitle(item.title);

    const { results } = await fetchSeries(item.category);
    setResults(results);
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
    // setTitle('Popular');
    async function getData() {
      const { results } = await fetchSeries();
      setResults(results);
    }

    getData();

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-end">
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
        {/* <div>{results.length} st</div> */}
      </div>
      <List results={results} />
    </>
  );
}
