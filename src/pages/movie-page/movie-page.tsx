import Copyright from '../../components/copyright/copyright.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import FilmRating from '../../components/film-rating/film-rating.tsx';
import FilmCardText from '../../components/film-card/film-card-text.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import Tab from '../../components/tabs/tab.tsx';
import {films} from "../../mocks/films.ts";
import {useParams} from "react-router-dom";
import {overviewMovie} from "../../mocks/overview.ts";

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
  // id: number;
}

function MoviePage({nameMovie, imgPath, imgPathPoster, director, date, genre, starring, level, rating, count, description}: MoviePageProps) {
  let {id} = useParams();
  nameMovie = films[Number(id)].nameMovie;
  imgPath =  films[Number(id)].coverMoviePath;
  imgPathPoster = films[Number(id)].posterPath;
  director = overviewMovie[Number(id)].director;
  date = films[Number(id)].year;
  genre = films[Number(id)].genre;
  starring = overviewMovie[Number(id)].actorsList;
  level = overviewMovie[Number(id)].descriptionRating;
  rating = overviewMovie[Number(id)].rating;
  count = overviewMovie[Number(id)].countRating;
  description = overviewMovie[Number(id)].descriptionMovie;
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
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Overview'} link={`/films/${id}`}/>
                  <Tab className={'film-nav__item'} name={'Details'} link={`/films/${id}/details`}/>
                  <Tab className={'film-nav__item'} name={'Reviews'} link={`/films/${id}/review`}/>
                </ul>
              </nav>
              <FilmRating rating={rating} level={level} count={count}/>
              <FilmCardText description={description} starring={starring} director={director}/>
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
