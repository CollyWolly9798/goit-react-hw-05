import { useParams } from 'react-router';
import { getReviews } from '../../api';
import { useEffect, useState } from 'react';
import css from './MovieReviews.module.scss';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReview() {
      const data = await getReviews(movieId);
      setReviews(data);
    }

    getReview();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {reviews.length === 0 ? (
        <p className={css.noReviewsMessage}>Sorry, there are no reviews of this film</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h2 className={css.author}>Author: {review.author}</h2>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
