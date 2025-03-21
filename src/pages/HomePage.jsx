import { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import MovieList from '../components/MovieList/MovieList';
export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getTrendMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const dataTrend = await fetchMovies();
        setTrendFilms(dataTrend.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something wrong...try again</p>}
      {trendFilms.length > 0 && <MovieList trendFilms={trendFilms} />}
    </div>
  );
}
