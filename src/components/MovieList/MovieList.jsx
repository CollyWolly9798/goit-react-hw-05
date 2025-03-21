import { Link, useLocation } from 'react-router';

export default function MovieList({ trendFilms }) {
  const location = useLocation();
  return (
    <ul>
      {trendFilms.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <p>{film.title || film.name || film.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
