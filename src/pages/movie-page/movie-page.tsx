import Copyright from '../../components/copyright/copyright.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import FilmRating from '../../components/film-rating/film-rating.tsx';
import FilmCardText from '../../components/film-card/film-card-text.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import FilmNavList from '../../components/film-nav-list/film-nav-list.tsx';

type MoviePageProps = {
  nameMovie: string;
  imgPath: string;
  imgPathPoster: string;
  genre: string;
  date: number;
  rating: string;
  level: string;
  count: string;
  description: string;
  starring: string;
  director: string;
}

function MoviePage(props: MoviePageProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={props.imgPath} alt={props.nameMovie}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'}/>
            <UserBlock imgPath={'img/avatar.jpg'}/>
          </header>
          <FilmCardWrap nameMovie={props.nameMovie} genre={props.genre} date={props.date}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={props.imgPathPoster} alt={props.nameMovie} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <FilmNavList className={'film-nav__item film-nav__item--active'} name={'Overview'}/>
                  <FilmNavList className={'film-nav__item'} name={'Details'}/>
                  <FilmNavList className={'film-nav__item'} name={'Reviews'}/>
                </ul>
              </nav>

              <FilmRating rating={props.rating} level={props.level} count={props.count}/>
              <FilmCardText description={props.description} starring={props.starring} director={props.director}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'}
              imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} id={1}
            />
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'} id={2}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'} id={3}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'} id={4}/>
          </div>
        </section>

        <footer className="page-footer">
          <Logo className={'logo__link logo__link--light'}/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
