import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import FilmCardWrap from '../../components/film-card/film-card-wrap.tsx';
import FilmRating from '../../components/film-rating/film-rating.tsx';
import FilmCardText from '../../components/film-card/film-card-text.tsx';
import Tab from '../../components/tabs/tab.tsx';

type MovieInListPageProps = {
    nameMovie: string;
    imgPath: string;
    imgPathPoster: string;
    genre: string;
    date: number;
    id: number;
}

function MovieInListPage({nameMovie, genre, date, imgPath, imgPathPoster, id}: MovieInListPageProps) {
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
                            <FilmRating rating={'8,9'} level={'Very good'} count={'240 ratings'}/>
                            <FilmCardText
                                description={'<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.</p><p>Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>'}
                                director={'Wes Anderson'}
                                starring={'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'}/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="page-content">
                <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>

                    <div className="catalog__films-list">
                        <CardFilm nameFilm={'Fantastic Beasts: The Crimes of Grindelwald'}
                                  imgPath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} id={0}/>
                        <CardFilm nameFilm={'Bohemian Rhapsody'} imgPath={'img/bohemian-rhapsody.jpg'} id={1}/>
                        <CardFilm nameFilm={'Macbeth'} imgPath={'img/macbeth.jpg'} id={2}/>
                        <CardFilm nameFilm={'Aviator'} imgPath={'img/aviator.jpg'} id={3}/>
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
