import { FETCH_URL, TOP_RATED_URL } from '../utils/urls';
import Slider from './Slider';

async function fetchMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(FETCH_URL);
  // const data = await res.json();
  return res.json();
}

async function fetchTopRated() {
  const res = await fetch(TOP_RATED_URL);
  return res.json();
}

export default async function MovieList() {
  // const [movies, setMovies] = useState([]);
  const { results } = await fetchMovies();
  const data = await fetchTopRated();
  console.log(data.results);

  // TODO: add loading

  return (
    <div className="m-2 relative">
      <Slider movies={results} title="Populära filmer" />
      <Slider movies={data.results} title="Top Rated" />
    </div>
  );
}
