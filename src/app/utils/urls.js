const key = '963cfc8ae0b11289f364cb1de6574bcf';

export const FETCH_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;

// TODO: this gives undefined, fix it
// console.log(process.env.NEXT_API_KEY);

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US'`;

export const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`;

export const TOP_RATED_DETAILS_URL = (topMovieId) =>
  `https://api.themoviedb.org/3/movie/${topMovieId}?api_key=${process.env.API_KEY}&language=en-US`;