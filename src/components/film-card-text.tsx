type FilmCardTextType = {
  description: string;
  director: string;
  starring: string;
}

function FilmCardText({description, director, starring}: FilmCardTextType) {
  return (
    <div className="film-card__text">
      {description}
      <p className="film-card__director"><strong>Director: {director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  );
}

export default FilmCardText;
