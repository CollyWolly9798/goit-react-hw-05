import { Link, useLocation } from 'react-router';
import css from './MovieList.module.scss';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div className={css.movieListContainer}>
      <h2 className={css.movieListTitle}>Trending today</h2>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`} state={location} className={css.movieListItemLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
