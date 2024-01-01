import { API_URL } from '../utils/urls';
import FilterMenu from '../components/FilterMenu';
async function fetchSeries(category) {
  'use server';
  const res = await fetch(API_URL('tv', category, 1));
  return res.json();
}

export default async function Series() {
  return (
    <main className=" w-full h-screen flex flex-col gap-6 my-12 mr-0 ml-6 sm:m-12 relative z-10">
      <FilterMenu fetchSeries={fetchSeries} />
    </main>
  );
}
