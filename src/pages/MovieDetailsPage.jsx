import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchDetails } from '../api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getDetailsMovie(movieId) {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchDetails(movieId);
        setMovie(response);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDetailsMovie(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading && <p>is loading...</p>}
      {error && <b>Error...</b>}
      <div>
        <h2>hello {console.log(movie)}</h2>
      </div>
    </>
  );
}
