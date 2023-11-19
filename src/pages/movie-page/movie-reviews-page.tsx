import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import Tab from '../../components/tabs/tab.tsx';
import Review from '../../components/review/review.tsx';
import { reviews} from '../../mocks/reviews.ts';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/hooks-index.ts';

function MovieReviewsPage() {
  const listFilms = useAppSelector((state) => (state.listFilms));
  const {id} = useParams<string>();
  const nameMovie = listFilms[Number(id)].name;
  const imgPath = listFilms[Number(id)].backgroundImage;
  const imgPathPoster = listFilms[Number(id)].posterImage;
  const date = listFilms[Number(id)].released;
  const genre = listFilms[Number(id)].genre;
  const indexesOfReview = [0, 1, 2, 3, 4, 5];
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
                  <Tab className={'film-nav__item'} name={'Overview'} link={`/films/${String(id)}`}/>
                  <Tab className={'film-nav__item'} name={'Details'}
                    link={`/films/${String(id)}/details`}
                  />
                  <Tab className={'film-nav__item film-nav__item--active'} name={'Reviews'}
                    link={`/films/${String(id)}/review`}
                  />
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  {indexesOfReview.map((i)=>(
                    <Review text={reviews[i].text} author={reviews[i].name} dateTime={'2016-12-24'} rating={reviews[i].rating} date={reviews[i].data} key={null}/>
                  ))}
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

export default MovieReviewsPage;
