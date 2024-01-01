export const API_URL = (type, category, page) =>
  `https://api.themoviedb.org/3/${type}/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`;

export const API_DETAILS_URL = (type, movieId) =>
  `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US'`;

export const DETAILS_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US'`;

// export const TV_SERIES_TOP_RATED_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`;

// export const TOP_RATED_DETAILS_URL = (topMovieId) =>
//   `https://api.themoviedb.org/3/movie/${topMovieId}?api_key=${process.env.API_KEY}&language=en-US`;
