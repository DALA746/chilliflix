import { FETCH_URL, TOP_RATED_URL } from '../utils/urls';
import Slider from './Slider';

function fetchAll() {
  const urls = [FETCH_URL, TOP_RATED_URL];
  return Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((r) => r.json())
        .then((data) => ({ data, url }))
        .catch((error) => ({ error, url }))
    )
  );
}

export default async function MovieList() {
  const [popularData, topRatedData] = await fetchAll();

  return (
    <div className="relative ml-12 flex flex-col gap-6">
      <Slider movies={popularData.data.results} title="Popular movies" />
      <Slider movies={topRatedData.data.results} title="Top rated" />
    </div>
  );
}
