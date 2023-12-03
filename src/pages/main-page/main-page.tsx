import CardFilm from '../../components/film-card/card-film.tsx';
import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import ButtonFilmCard from '../../components/film-card/button-film-card.tsx';
import {useEffect, useState} from 'react';
import {ListGenres} from '../../components/catalog-genres/list-genres.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {ShowMore} from '../../components/show-more/show-more.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {UnauthorizedUser} from '../../components/unauthorized-user/unauthorized-user.tsx';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {getFilms, getPromoFilm, getShowFilms} from '../../store/film-process/film-selectors.ts';
import {getGenre} from '../../store/genre-process/genre-selectors.ts';
import {hideMovies, showMoreFilms} from '../../store/film-process/film-process.ts';

function MainPage() {
  const promoFilm = useAppSelector(getPromoFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeGenre = useAppSelector(getGenre);
  const showFilms = useAppSelector(getShowFilms);
  const listFilms = useAppSelector(getFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  useEffect(() => () => {
    dispatch(hideMovies());
  }, [dispatch]);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="/public/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>
          {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock imgPath={'img/avatar.jpg'}/> :
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
                <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'}
                  className={'btn btn--play film-card__button'}
                  setIsPlaying={setIsPlaying} isPlaying={isPlaying}
                />
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
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
              <CardFilm nameFilm={movie.name} imgPath={movie.previewImage} id={movie.id} videoPath={movie.previewVideoLink}
                //videoPath={movie.videoLink}
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
