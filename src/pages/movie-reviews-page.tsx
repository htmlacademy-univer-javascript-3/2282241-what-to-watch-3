import Logo from '../components/logo';
import Copyright from '../components/copyright';
import CardFilm from '../components/card-film';
import UserBlock from '../components/user-block';
import FilmCardWrap from '../components/film-card-wrap';
import FilmNavList from '../components/film-nav-list';
import Review from '../components/review';

type MovieReviewsPageType = {
  nameMovie: string;
  imgPath: string;
  imgPathPoster: string;
  genre: string;
  date: number;
}

function MovieReviewsPage({nameMovie, imgPath, imgPathPoster, genre, date}: MovieReviewsPageType) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={imgPath} alt={nameMovie}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
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
                  <FilmNavList className={'film-nav__item film-nav__item--active'} name={'Overview'}/>
                  <FilmNavList className={'film-nav__item'} name={'Details'}/>
                  <FilmNavList className={'film-nav__item'} name={'Reviews'}/>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <Review text={'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.'} author={'Kate Muir'} dateTime={'2016-12-24'} rating={'8,9'} date={'December 24, 2016'}/>
                  <Review text={'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.'} author={'Bill Goodykoontz'} dateTime={'2015-11-18'} rating={'8,0'} date={'November 18, 2015'}/>
                  <Review text={'I didn\'t find it amusing, and while I can appreciate the creativity,it\'s an hour and 40 minutes I wish I could take back.'} author={'Amanda Greever'} dateTime={'2015-11-18'} rating={'8,0'} date={'November 18, 2015'}/>
                </div>
                <div className='film-card__reviews-col'>
                  <Review text={'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'} author={'Matthew Lickona'} dateTime={'2016-12-20'} rating={'7,2'} date={'December 20, 2016'}/>
                  <Review text={'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'} author={'Paula Fleri-Soler'} dateTime={'2016-12-20'} rating={'7,6'} date={'December 20, 2016'}/>
                  <Review text={'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'} author={'Paula Fleri-Soler'} dateTime={'2016-12-20'} rating={'7,0'} date={'December 20, 2016'}/>
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
            <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'} imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}/>
            <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'}/>
            <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'}/>
            <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'}/>
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

export default MovieReviewsPage;
