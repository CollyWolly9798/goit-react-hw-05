import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDk1MzhlZjFmZDAzYzU3NThiNGJiMmI3NTAwNTJhOSIsIm5iZiI6MTc0MjQ2MzU0OC4zMDA5OTk5LCJzdWIiOiI2N2RiZTIzYzlmMzU4ZjRhMTM3ZmEwOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6O6L_AO-cuJzoXi0KNAaS5duvn8vVYfpJAEalO-65TM',
  },
};

export const fetchMovies = async () => {
  const url = ' https://api.themoviedb.org/3/trending/movie/day?include_adult=false&lang=en-US&page=1';

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
