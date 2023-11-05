import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import FilmCardTextItem from '../../components/film-card/film-card-text-item.tsx';
import Tab from '../../components/tabs/tab.tsx';
import {useParams} from 'react-router-dom';
import {films} from '../../mocks/films.ts';
import {overviewMovie} from '../../mocks/overview.ts';

// type MoviePageDetailsProps = {
//     nameMovie: string;
//     imgPath: string;
//     imgPathPoster: string;
//     genre: string;
//     date: number;
//     director: string;
//     id: number;
// }

function MovieDetailsPage() {
  const {id} = useParams();
  const nameMovie = films[Number(id)].nameMovie;
  const imgPath = films[Number(id)].coverMoviePath;
  const imgPathPoster = films[Number(id)].posterPath;
  const date = films[Number(id)].year;
  const genre = films[Number(id)].genre;
  const director = overviewMovie[Number(id)].director;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={imgPath} alt={nameMovie}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'}/>
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
                  <Tab className={'film-nav__item'} name={'Overview'} link={`/films/${id}`}/>
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Details'}
                    link={`/films/${id}/details`}
                  />
                  <Tab className={'film-nav__item'} name={'Reviews'}
                    link={`/films/${id}/review`}
                  />
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
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'}
              imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} id={0}
            />
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'} id={1}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'} id={2}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'} id={3}/>
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

export default MovieDetailsPage;
