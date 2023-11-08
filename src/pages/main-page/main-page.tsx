import CardFilm from '../../components/film-card/card-film.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import ButtonFilmCard from '../../components/film-card/button-film-card.tsx';
import {films, FilmsProps} from '../../mocks/films.ts';
import {useEffect, useState} from 'react';
import {Genre} from '../../types/genre.ts';
import {ListGenres} from '../../components/catalog-genres/list-genres.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {ShowMore} from "../../components/show-more/show-more.tsx";
import {hideMovies, showMoreFilms} from "../../store/action.ts";

type SelectedMovie = {
    nameMoviePoster: string;
    genre: Genre;
    date: number;
    posterImg: string;
    film: FilmsProps[];
}

function MainPage({nameMoviePoster, posterImg, date, genre}: SelectedMovie) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isVisible, _] = useState(false);
  const activeGenre = useAppSelector((state) => state.genre);
  const showFilms = useAppSelector((state)=>(state.countFilms))
  const listFilms = useAppSelector((state)=>(state.listFilms));
  const dispatch = useAppDispatch();
  useEffect(() => () => {
    dispatch(hideMovies());
  }, [dispatch]);
  // const indexes = [0, 1, 2, 3];
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="/public/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>
          <UserBlock imgPath={'img/avatar.jpg'}/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImg} alt={nameMoviePoster} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{nameMoviePoster}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
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
            {films.filter((movie)=>{
              if (activeGenre === 'All genres') {
                return true;
              }
              return movie.genre === activeGenre;
            }).slice(0, showFilms).map((movie)=>(
              <CardFilm nameFilm={movie.nameMovie} imgPath={movie.posterPath} id={movie.id} key={movie.id}/>
            ))}
          </div>
          {showFilms >= listFilms.length ? null :
          <ShowMore onClickHandler={()=>{dispatch(showMoreFilms())}}/>}
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
