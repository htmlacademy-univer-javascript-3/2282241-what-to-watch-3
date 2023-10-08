import Logo from '../components/logo';
import Copyright from '../components/copyright';
import UserBlock from '../components/user-block';
import FilmCardWrap from '../components/film-card-wrap';
import CardFilm from '../components/card-film';
import FilmCardTextItem from '../components/film-card-text-item';
import FilmNavList from '../components/film-nav-list';

type MoviePageDetailsType = {
  nameMovie: string;
  imgPath: string;
  imgPathPoster: string;
  genre: string;
  date: number;
  director:string;
}
function MovieDetailsPage({nameMovie, imgPath, date, genre, imgPathPoster, director}: MoviePageDetailsType) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={imgPath} alt={nameMovie}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock imgPath={'img/avatar.jpg'}/>
          </header>
          <FilmCardWrap nameMovie={nameMovie} genre={genre} date={date}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={imgPathPoster} alt={nameMovie} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <FilmNavList className={'film-nav__item film-nav__item--active'} name={'Overview'}/>
                  <FilmNavList className={'film-nav__item'} name={'Details'}/>
                  <FilmNavList className={'film-nav__item'} name={'Reviews'}/>
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                      Ralph Fiennes, <br/>
                    Jeff Goldblum
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <FilmCardTextItem name={'Run Time'} value={'1h 39m'}/>
                  <FilmCardTextItem name={'Genre'} value={'Comedy'}/>
                  <FilmCardTextItem name={'Released'} value={2014}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'} imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'}/>
          </div>
        </section>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}

export default MovieDetailsPage;
