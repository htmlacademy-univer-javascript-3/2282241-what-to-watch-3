import ButtonFilmCard from './button-film-card';

type FilmCardWrapType = {
  nameMovie: string;
  genre: string;
  date: number;
}

function FilmCardWrap({nameMovie, genre, date}: FilmCardWrapType) {
  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{nameMovie}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{date}</span>
        </p>

        <div className="film-card__buttons">
          <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'btn btn--play film-card__button'}/>
          {/*<ButtonFilmCard height={"20"} width={"19"} xlinkHref={"#add"} nameButton={"My list"}/>*/}
          <button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">9</span>
          </button>
          <a href="add-review.html" className="btn film-card__button">Add review</a>
        </div>
      </div>
    </div>
  );
}

export default FilmCardWrap;
