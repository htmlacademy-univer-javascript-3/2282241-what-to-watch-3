import Copyright from '../../components/copyright/copyright.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import FilmRating from '../../components/film-rating/film-rating.tsx';
import FilmCardText from '../../components/film-card/film-card-text.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import Tab from '../../components/tabs/tab.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {Spinner} from '../loading-page/spinner.tsx';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchFilmAction} from '../../store/api-actions.ts';

function MoviePage() {
  const film = useAppSelector((state) => state.film);
  const listFilms = useAppSelector((state) => state.listFilms);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  // console.log(film); // 2 раза null, затем выдает данные
  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id]);
  if (film === null) {
    return <Spinner/>;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'}/>
            <UserBlock imgPath={'img/avatar.jpg'}/>
          </header>
          <FilmCardWrap nameMovie={film.name} genre={film.genre} date={film.released}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Overview'}
                    link={`/films/${film.id}`}
                  />
                  <Tab className={'film-nav__item'} name={'Details'}
                    link={`/films/${film.id}/details`}
                  />
                  <Tab className={'film-nav__item'} name={'Reviews'}
                    link={`/films/${film.id}/review`}
                  />
                </ul>
              </nav>
              <FilmRating rating={film.rating} level={film.rating} count={film.scoresCount}/>
              <FilmCardText description={film.description} starring={film.starring}
                director={film.director}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'}
              imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} id={listFilms[0].id}
            />
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'} id={listFilms[1].id}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'} id={listFilms[3].id}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'} id={listFilms[4].id}/>
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
