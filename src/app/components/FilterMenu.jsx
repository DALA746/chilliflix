'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import List from './List';

export default function FilterMenu({ fetchSeries }) {
  // todo: pagination
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('popular');
  const [results, setResults] = useState(false);
  const dropdownRef = useRef(null);
  const seriesCategory = ['popular', 'airing_today', 'top_rated'];

  const handleClick = async (category) => {
    setIsOpen(false);
    setTitle(category);
    const { results } = await fetchSeries(category);
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
    const fetchData = async () => {
      const { results } = await fetchSeries('popular');
      setTitle('popular');
      setResults(results);
    };
    fetchData();
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={dropdownRef}
        className="relative inline-block w-full sm:max-w-sm">
        <div>
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
              {seriesCategory.map((category) => (
                <button
                  key={category}
                  onClick={() => handleClick(category)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        <div>{results.length}</div>
      </div>
      <List results={results} />
    </>
  );
}
