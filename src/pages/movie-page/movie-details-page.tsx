import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import {FilmCardWrap} from '../../components/film-card/film-card-wrap.tsx';
import {FilmCardTextItem} from '../../components/film-card/film-card-text-item.tsx';
import {Tab} from '../../components/tab/tab.tsx';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {MoreLikeThis} from '../../components/more-like-this/more-like-this.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {UnauthorizedUser} from '../../components/unauthorized-user/unauthorized-user.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {getFilm} from '../../store/film-process/film-selectors.ts';


export function MovieDetailsPage() {
  const {id} = useParams();
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card film-card--full" data-testid="movie-details-page">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'}/>
            {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock /> :
              <UnauthorizedUser/>}
          </header>
          <FilmCardWrap nameMovie={film.name} genre={film.genre} date={film.released} id={film.id}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <Tab className={'film-nav__item'} name={'Overview'} link={`/films/${String(id)}`}/>
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Details'}
                    link={`/films/${String(id)}/details`}
                  />
                  <Tab className={'film-nav__item'} name={'Reviews'}
                    link={`/films/${String(id)}/review`}
                  />
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{film?.director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {film?.starring}
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <FilmCardTextItem name={'Run Time'} value={film.runTime}/>
                  <FilmCardTextItem name={'Genre'} value={film.genre}/>
                  <FilmCardTextItem name={'Released'} value={film.released}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis/>
        <footer className="page-footer">
          <Logo className={'logo__link logo__link--light'}/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}
