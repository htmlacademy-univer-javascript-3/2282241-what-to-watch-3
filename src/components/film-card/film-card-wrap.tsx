import ButtonFilmCard from './button-film-card.tsx';

type FilmCardWrapProps = {
  nameMovie: string;
  genre: string;
  date: number;
}

function FilmCardWrap(props: FilmCardWrapProps) {
  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{props.nameMovie}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{props.genre}</span>
          <span className="film-card__year">{props.date}</span>
        </p>

        <div className="film-card__buttons">
          <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'btn btn--play film-card__button'}/>
          <ButtonFilmCard height={'20'} width={'19'} xlinkHref={'#add'} nameButton={'My list'} className={'btn btn--list film-card__button'}>
            <span className="film-card__count">9</span>
          </ButtonFilmCard>
          <a href="add-review.html" className="btn film-card__button">Add review</a>
        </div>
      </div>
    </div>
  );
}

export default FilmCardWrap;
