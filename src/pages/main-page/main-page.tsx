import {FilmCard} from '../../components/film-card/film-card.tsx';
import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import {useEffect} from 'react';
import {ListGenres} from '../../components/list-genres/list-genres.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {ShowMore} from '../../components/show-more/show-more.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {UnauthorizedUser} from '../../components/unauthorized-user/unauthorized-user.tsx';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {
  getFilms,
  getPromoFilm, getPromoFilmLoadingStatus,
  getShowFilms
} from '../../store/film-process/film-selectors.ts';
import {getGenre} from '../../store/genre-process/genre-selectors.ts';
import {hideMovies, showMoreFilms} from '../../store/film-process/film-process.ts';
import {FilmCardButtonAdd} from '../../components/film-card/film-card-button/film-card-button-add.tsx';
import {FilmCardButtonPlay} from '../../components/film-card/film-card-button/film-card-button-play.tsx';
import {Spinner} from '../loading-page/spinner.tsx';


function MainPage() {
  const promoFilm = useAppSelector(getPromoFilm);
  const activeGenre = useAppSelector(getGenre);
  const showFilms = useAppSelector(getShowFilms);
  const listFilms = useAppSelector(getFilms);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  useEffect(() => () => {
    dispatch(hideMovies());
  }, [dispatch]);
  if (isPromoFilmLoading) {
    return (
      <Spinner/>
    );
  }
  return (
    <>
      <section className="film-card" data-testid="main-page">
        <div className="film-card__bg">
          <img src="/public/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>
          {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock/> :
            <UnauthorizedUser/>}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <FilmCardButtonPlay height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'}
                  className={'btn btn--play film-card__button'}
                  path={`player/${promoFilm?.id ?? ''}`}
                />
                <FilmCardButtonAdd filmId={promoFilm?.id ?? ''}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ListGenres/>
          <div className="catalog__films-list">
            {listFilms.filter((movie) => {
              if (activeGenre === 'All genres') {
                return true;
              }
              return movie.genre === activeGenre;
            }).slice(0, showFilms).map((movie) => (
              <FilmCard nameFilm={movie.name} imgPath={movie.previewImage} id={movie.id}
                videoPath={movie.previewVideoLink}
                key={movie.id}
              />
            ))}
          </div>
          {showFilms >= listFilms.length ? null :
            <ShowMore onClickHandler={() => {
              dispatch(showMoreFilms());
            }}
            />}
        </section>

        <footer className="page-footer">
          <Logo className={'logo__link logo__link--light'}/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
