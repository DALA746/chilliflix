import Image from 'next/image';
import HeroBanner from './components/HeroBanner';
import './globals.css';
import {
  FETCH_URL,
  TOP_RATED_URL,
  NOW_PLAYING_URL,
  UPCOMING_URL,
  API_URL
} from '../app/utils/urls';
import Slider from '../app/components/Slider';

function fetchAll() {
  // const urls = [FETCH_URL, TOP_RATED_URL, NOW_PLAYING_URL, UPCOMING_URL];
  const urls = [
    API_URL('movie', 'popular', 1),
    API_URL('movie', 'top_rated', 1),
    API_URL('movie', 'now_playing', 1),
    API_URL('movie', 'upcoming', 1)
  ];
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
  const [popularData, topRatedData, nowPlayingData, upcomingData] =
    await fetchAll();

  const random =
    popularData.data.results[
      Math.floor(Math.random() * popularData.data.results.length)
    ];

  return (
    <main className="sm:relative md:absolute top-0 z-0 w-full">
      <HeroBanner movie={random} />
      <div className="relative ml-6 sm:ml-12 mb-12 flex flex-col gap-6">
        <Slider movies={popularData.data.results} title="Popular movies" />
        <Slider movies={upcomingData.data.results} title="Upcoming movies" />
        <Slider movies={topRatedData.data.results} title="Top rated" />
        <Slider movies={nowPlayingData.data.results} title="Now playing" />
      </div>
    </main>
  );
}
