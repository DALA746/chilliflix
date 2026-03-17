import HeroBanner from './components/HeroBanner';
import './globals.css';
import { API_URL } from './utils/urls';
import Slider from './components/Slider';

async function fetchAll() {
  const urls = [
    API_URL('movie', 'popular', 1),
    API_URL('movie', 'top_rated', 1),
    API_URL('movie', 'now_playing', 1),
    API_URL('movie', 'upcoming', 1),
    API_URL('tv', 'top_rated', 1)
  ];

  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          console.log(`Fetching: ${url}`);
          const response = await fetch(url, { cache: 'no-store' });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status} for ${url}`);
          }

          const data = await response.json();
          console.log(`Success: ${url}`, data?.results?.length || 0, 'results');
          return { data, url };
        } catch (error) {
          console.error(`Error fetching ${url}:`, error.message);
          return { data: null, url };
        }
      })
    );
    return results;
  } catch (error) {
    console.error('fetchAll failed:', error);
    throw error;
  }
}

export default async function Home() {
  const [popularData, topRatedData, nowPlayingData, upcomingData, seriesData] =
    await fetchAll();

  // Check if data exists and has results
  if (
    !popularData?.data?.results ||
    !upcomingData?.data?.results ||
    !seriesData?.data?.results
  ) {
    return (
      <main className="sm:relative md:absolute top-0 z-0 w-full">
        <div className="p-6 text-center text-white">
          <p>Failed to load data. Please try again later.</p>
        </div>
      </main>
    );
  }

  const random =
    popularData.data.results[
      Math.floor(Math.random() * popularData.data.results.length)
    ];

  return (
    <main className="sm:relative md:absolute top-0 z-0 w-full">
      <HeroBanner movie={random} />
      <div className="relative ml-6 sm:ml-12 mb-12 flex flex-col gap-6">
        <Slider movies={popularData.data.results} title="Popular movies" />
        <Slider
          movies={seriesData.data.results.slice(0, 10)}
          title="Top rated series"
          isTop10={true}
        />
        <Slider movies={upcomingData.data.results} title="Upcoming movies" />
      </div>
    </main>
  );
}
