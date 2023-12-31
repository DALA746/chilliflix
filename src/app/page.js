import Image from 'next/image';
import HeroBanner from './components/HeroBanner';
import './globals.css';
import { FETCH_URL, TOP_RATED_URL } from '../app/utils/urls';
import Slider from '../app/components/Slider';

function fetchAll() {
  const urls = [FETCH_URL, TOP_RATED_URL];
  return Promise.all(
    urls.map((url) =>
      fetch(url, { cache: 'no-store' })
        .then((r) => r.json())
        .then((data) => ({ data, url }))
        .catch((error) => ({ error, url }))
    )
  );
}

export default async function Home() {
  const [popularData, topRatedData] = await fetchAll();
  const random =
    popularData.data.results[
      Math.floor(Math.random() * popularData.data.results.length)
    ];
  return (
    <main className="absolute top-0 z-0 w-full">
      <HeroBanner movie={random} />
      <div className="relative ml-12 mb-12 flex flex-col gap-6">
        <Slider movies={popularData.data.results} title="Popular movies" />
        <Slider movies={topRatedData.data.results} title="Top rated" />
      </div>
    </main>
  );
}
