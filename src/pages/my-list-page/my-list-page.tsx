import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import {FilmsProps} from "../../types/films.ts";

function MyListPage(films: FilmsProps[]) {
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
          <CardFilm nameFilm={films[0].name} imgPath={films[0].posterImage} id={0}/>
          <CardFilm nameFilm={films[1].name} imgPath={films[1].posterImage} id={1}/>
          <CardFilm nameFilm={films[2].name} imgPath={films[2].posterImage} id={2}/>
          <CardFilm nameFilm={films[3].name} imgPath={films[3].posterImage} id={3}/>
          <CardFilm nameFilm={films[4].name} imgPath={films[4].posterImage} id={4}/>
          <CardFilm nameFilm={films[5].name} imgPath={films[5].posterImage} id={5}/>
          <CardFilm nameFilm={films[6].name} imgPath={films[6].posterImage} id={6}/>
          <CardFilm nameFilm={films[7].name} imgPath={films[7].posterImage} id={7}/>
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
