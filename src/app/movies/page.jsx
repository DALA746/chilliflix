import { API_URL } from '../utils/urls';
import Media from '../components/Media';
import DropDownMenu from '../components/DropDownMenu';

async function fetchMovies(category = 'popular') {
  'use server';
  console.log('called!--------------------------------------');
  const res = await fetch(API_URL('movie', category, 1));
  return res.json();
}
export default async function Movies() {
  // const { results } = await fetchMovies();
  // console.log(results, 'results');

  // const doFetch = async (category) => {
  //   console.log(category);
  //   const { results } =
  //     pathname === '/series'
  //       ? await fetchSeries(category)
  //       : await fetchMovies(category);
  //   // setResults(results);
  // };
  // console.log(results, 'movies');
  return (
    <main className="relative z-10 w-full h-full flex flex-col gap-4 mb-12">
      <div className="ml-8 mr-8 flex flex-col gap-5 sm:ml-12 sm:mr-12 ">
        <DropDownMenu doFetch={fetchMovies} />
        <Media fetchMovies={fetchMovies} />
      </div>
    </main>
  );
}
