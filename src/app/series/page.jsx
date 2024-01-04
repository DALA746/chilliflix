import { API_URL } from '../utils/urls';
import FilterMenu from '../components/FilterMenu';

async function fetchSeries(category = 'popular') {
  'use server';
  const res = await fetch(API_URL('tv', category, 1));
  return res.json();
}

export default async function Series() {
  return (
    <main className="relative z-10 w-full h-full flex flex-col gap-4 mb-12 ">
      <div className="ml-12 mr-12 flex flex-col gap-5">
        <FilterMenu fetchSeries={fetchSeries} />
      </div>
    </main>
  );
}
