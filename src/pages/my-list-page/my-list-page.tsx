import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import {FilmsProps} from '../../mocks/films.ts';
import {films} from '../../mocks/films.ts';

function MyListPage(props: FilmsProps[]) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock imgPath={'img/avatar.jpg'}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <CardFilm nameFilm={props[0].nameMovie} imgPath={props[0].posterPath} id={0} film={films}/>
          <CardFilm nameFilm={props[1].nameMovie} imgPath={props[1].posterPath} id={1} film={films}/>
          <CardFilm nameFilm={props[2].nameMovie} imgPath={props[2].posterPath} id={2} film={films}/>
          <CardFilm nameFilm={props[3].nameMovie} imgPath={props[3].posterPath} id={3} film={films}/>
          <CardFilm nameFilm={props[4].nameMovie} imgPath={props[4].posterPath} id={4} film={films}/>
          <CardFilm nameFilm={props[5].nameMovie} imgPath={props[5].posterPath} id={5} film={films}/>
          <CardFilm nameFilm={props[6].nameMovie} imgPath={props[6].posterPath} id={6} film={films}/>
          <CardFilm nameFilm={props[7].nameMovie} imgPath={props[7].posterPath} id={7} film={films}/>
        </div>
      </section>

      <footer className="page-footer">
        <Logo className={'logo__link logo__link--light'}/>
        <Copyright/>
      </footer>
    </div>
  );
}

export default MyListPage;
