'use client';
import { useState, useEffect, useRef } from 'react';
import List from './List';
import Loading from '../loading';
import { usePathname } from 'next/navigation';
import DropDownMenu from './DropDownMenu';

export default function Media({ fetchSeries, fetchMovies, results1 }) {
  console.log(results1, 'results');
  const pathname = usePathname();
  const [searchItem, setSearchItem] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    console.log(results, 'results');

    const filteredItems = results.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);

  //     const { results } =
  //       pathname === '/series' ? await fetchSeries() : await fetchMovies();
  //     if (results) {
  //       setResults(results);
  //       setFilteredItems(results);
  //       setLoading(false);
  //     }
  //   }
  //   getData();
  // }, [fetchMovies, fetchSeries, pathname]);

  return (
    <div className="relative flex flex-col gap-7 h-screen">
      {loading && <Loading />}
      <div className="sm:flex justify-between gap-2">
        <div className="inline-flex gap-2 items-center w-full sm:max-w-sm">
          <input
            className="px-4 py-2 w-full text-gray-700 rounded-md"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search movies or series..."
          />
        </div>
      </div>
      <List results={results} />
    </div>
  );
}
