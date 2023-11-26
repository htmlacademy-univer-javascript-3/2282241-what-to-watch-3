type FilmRatingProps = {
  rating: number;
  level: number;
  count: number;
}

function FilmRating({rating, count, level}: FilmRatingProps) {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{level}</span>
        <span className="film-rating__count">{count}</span>
      </p>
    </div>
  );
}

export default FilmRating;
