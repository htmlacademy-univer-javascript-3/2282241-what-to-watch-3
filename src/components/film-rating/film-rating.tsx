type FilmRatingProps = {
  rating: string;
  level: string;
  count: string;
}

function FilmRating(props: FilmRatingProps) {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{props.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{props.level}</span>
        <span className="film-rating__count">{props.count}</span>
      </p>
    </div>
  );
}

export default FilmRating;
