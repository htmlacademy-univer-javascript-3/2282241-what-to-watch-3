import CardFilm from '../../components/film-card/card-film.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CatalogGenres from '../../components/catalog-genres/catalog-genres.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import ButtonFilmCard from '../../components/film-card/button-film-card.tsx';
import {FilmsProps} from '../../mocks/films.ts';

type SelectedMovie = {
  nameMoviePoster: string;
  genre: 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thriller';
  date: number;
  posterImg: string;
  film: FilmsProps[];
}

function MainPage(props: SelectedMovie) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo className={'logo__link'}/>
          <UserBlock imgPath={'img/avatar.jpg'}/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.posterImg} alt={props.nameMoviePoster} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.nameMoviePoster}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.date}</span>
              </p>

              <div className="film-card__buttons">
                <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'btn btn--play film-card__button'}/>
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

          <ul className="catalog__genres-list">
            <CatalogGenres classNameGenres={'catalog__genres-item catalog__genres-item--active'} nameGenres={'All genres'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Crime'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Documentary'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Dramas'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Horror'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Kids & Family'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Romance'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Sci-Fi'} link={'#'}/>
            <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={'Thrillers'} link={'#'}/>
          </ul>

          <div className="catalog__films-list">
            <CardFilm nameFilm={props.film[0].nameMovie}
              imgPath={props.film[0].posterPath} id={1}
            />
            <CardFilm nameFilm={props.film[1].nameMovie}
              imgPath={props.film[1].posterPath} id={2}
            />
            <CardFilm nameFilm={props.film[2].nameMovie}
              imgPath={props.film[2].posterPath} id={3}
            />
            <CardFilm nameFilm={props.film[3].nameMovie}
              imgPath={props.film[3].posterPath} id={4}
            />
            <CardFilm nameFilm={props.film[4].nameMovie}
              imgPath={props.film[4].posterPath} id={5}
            />
            <CardFilm nameFilm={props.film[5].nameMovie}
              imgPath={props.film[5].posterPath} id={6}
            />
            <CardFilm nameFilm={props.film[6].nameMovie}
              imgPath={props.film[6].posterPath} id={7}
            />
            <CardFilm nameFilm={props.film[7].nameMovie}
              imgPath={props.film[7].posterPath} id={8}
            />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
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

export default MainPage;
