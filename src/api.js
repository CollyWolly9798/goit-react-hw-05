import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDk1MzhlZjFmZDAzYzU3NThiNGJiMmI3NTAwNTJhOSIsIm5iZiI6MTc0MjQ2MzU0OC4zMDA5OTk5LCJzdWIiOiI2N2RiZTIzYzlmMzU4ZjRhMTM3ZmEwOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6O6L_AO-cuJzoXi0KNAaS5duvn8vVYfpJAEalO-65TM',
  },
};

export const fetchPopularFilms = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', options);
  return response.data.results;
};

export const fetchFilmById = async filmID => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmID}`, options);
  return response.data;
};

export const fetchQueryFilms = async query => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
  return response.data.results;
};

export const getCast = async filmID => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmID}/credits`, options);
  return response.data.cast;
};
export const getReviews = async filmID => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmID}/reviews`, options);
  return response.data.results;
};
