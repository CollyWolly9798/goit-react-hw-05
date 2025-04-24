import { useParams } from 'react-router';
import { getCast } from '../../api';
import { useEffect, useState } from 'react';
import css from './MovieCast.module.scss';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCasts() {
      const data = await getCast(movieId);
      setCast(data);
    }

    getCasts();
  }, [movieId]);

  return (
    <div className={css.movieCastContainer}>
      {cast.length === 0 ? (
        <p className={css.noActorInfo}>There is no information about this film</p>
      ) : (
        <ul className={css.actorList}>
          {cast.map(actor => (
            <li key={actor.id} className={css.actorCard}>
              <img
                className={css.actorCardImage}
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <h3 className={css.actorCardTitle}>{actor.name}</h3>
              <p className={css.actorCardDescription}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
