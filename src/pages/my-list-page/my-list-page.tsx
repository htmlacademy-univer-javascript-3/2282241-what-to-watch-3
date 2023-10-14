import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';

function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock imgPath={'img/avatar.jpg'}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'} imgPath={'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
          <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'public/img/bohemian-rhapsody.jpg'}/>
          <CardFilm nameFilm={'Macbeth'} imgPath={'public/img/macbeth.jpg'}/>
          <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'}/>
          <CardFilm nameFilm={'We need to talk about Kevin'} imgPath={'img/we-need-to-talk-about-kevin.jpg'}/>
          <CardFilm nameFilm={'What We Do in the Shadows'} imgPath={'img/what-we-do-in-the-shadows.jpg'}/>
          <CardFilm nameFilm={'Revenant'} imgPath={'img/revenant.jpg'}/>
          <CardFilm nameFilm={'Johnny English'} imgPath={'img/johnny-english.jpg'}/>
          <CardFilm nameFilm={'Shutter Island'} imgPath={'img/shutter-island.jpg'}/>
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
