import CardFilm from '../components/card-film';
import Logo from '../components/logo';
import UserBlock from '../components/user-block';
import CatalogGenres from '../components/catalog-genres';
import Copyright from '../components/copyright';
import ButtonFilmCard from '../components/button-film-card.tsx';

type SelectedMovie = {
  nameMoviePoster: string;
  genre: 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thriller';
  date: number;
  posterImg: string;
}

function MainPage({nameMoviePoster, date, genre, posterImg}: SelectedMovie) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
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
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'} imgPath={'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'public/img/bohemian-rhapsody.jpg'}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'public/img/macbeth.jpg'}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'public/img/aviator.jpg'}/>
            <CardFilm nameFilm={'We need to talk about Kevin'} imgPath={'public/img/we-need-to-talk-about-kevin.jpg'}/>
            <CardFilm nameFilm={'What We Do in the Shadows'} imgPath={'public/img/what-we-do-in-the-shadows.jpg'}/>
            <CardFilm nameFilm={'Revenant'} imgPath={'public/img/revenant.jpg'}/>
            <CardFilm nameFilm={'Johnny English'} imgPath={'public/img/johnny-english.jpg'}/>
            <CardFilm nameFilm={'Shutter Island'} imgPath={'public/img/shutter-island.jpg'}/>
            <CardFilm nameFilm={'Pulp Fiction'} imgPath={'public/img/pulp-fiction.jpg'}/>
            <CardFilm nameFilm={'No Country for Old Men'} imgPath={'public/img/no-country-for-old-men.jpg'}/>
            <CardFilm nameFilm={'Snatch'} imgPath={'public/img/snatch.jpg'}/>
            <CardFilm nameFilm={'Moonrise Kingdom'} imgPath={'public/img/moonrise-kingdom.jpg'}/>
            <CardFilm nameFilm={'Seven Years in Tibet'} imgPath={'public/img/seven-years-in-tibet.jpg'}/>
            <CardFilm nameFilm={'Midnight Special'} imgPath={'public/img/midnight-special.jpg'}/>
            <CardFilm nameFilm={'War of the Worlds'} imgPath={'public/img/war-of-the-worlds.jpg'}/>
            <CardFilm nameFilm={'Dardjeeling Limited'} imgPath={'public/img/dardjeeling-limited.jpg'}/>
            <CardFilm nameFilm={'Orlando'} imgPath={'public/img/orlando.jpg'}/>
            <CardFilm nameFilm={'Mindhunter'} imgPath={'public/img/mindhunter.jpg'}/>
            <CardFilm nameFilm={'Midnight Special'} imgPath={'public/img/midnight-special.jpg'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
