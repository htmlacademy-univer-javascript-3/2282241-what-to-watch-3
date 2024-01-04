import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import FilmCard from '../../components/film-card/film-card.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import FilmRating from '../../components/film-rating/film-rating.tsx';
import FilmCardText from '../../components/film-card/film-card-text.tsx';
import Tab from '../../components/tabs/tab.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getFavoriteFilms} from '../../store/film-process/film-selectors.ts';
import {useMemo} from 'react';

type MovieInListPageProps = {
    nameMovie: string;
    imgPath: string;
    imgPathPoster: string;
    genre: string;
    date: number;
    id: number;
}

function MovieInListPage({nameMovie, genre, date, imgPath, imgPathPoster, id}: MovieInListPageProps) {
  const myFilms = useAppSelector(getFavoriteFilms);
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
            <UserBlock/>
          </header>
          <FilmCardWrap nameMovie={nameMovie} genre={genre} date={date} id={nameMovie}/>
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
              <FilmRating rating={8.9} level={8.9} count={240}/>
              <FilmCardText
                description={'<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.</p><p>Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>'}
                director={'Wes Anderson'}
                starring={['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe and other']}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {useMemo(() => (myFilms.map((film) =>(
              <FilmCard
                key={film.id}
                id={film.id}
                nameFilm={film.name}
                imgPath={film.previewImage}
                videoPath={film.previewVideoLink}
              />
            )
            )), [myFilms])}
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

export default MovieInListPage;
