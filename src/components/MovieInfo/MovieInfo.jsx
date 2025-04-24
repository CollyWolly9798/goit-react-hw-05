import css from './MovieInfo.module.scss';

export default function MovieInfo({ movie }) {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className={css.textContent}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.userScore}>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p className={css.overview}>{movie.overview}</p>
        <h3>Genres</h3>
        <ul className={css.genreList}>
          {movie.genres && movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
