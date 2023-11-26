import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import {MoviesProps} from '../../types/films.ts';
import {AuthorizationStatus} from "../../components/private-route/private-route.tsx";
import {UnauthorizedUser} from "../../components/unauthorized-user/unauthorized-user.tsx";
import {useAppSelector} from "../../hooks/hooks-index.ts";

function MyListPage(films: MoviesProps[]) {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    return (
        <div className="user-page">
            <header className="page-header user-page__head">
                <Logo className={'logo__link'}/>
                {authorizationStatus === AuthorizationStatus.Auth ? <UserBlock imgPath={'img/avatar.jpg'}/> :
                    <UnauthorizedUser/>}

                <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span>
                </h1>
            </header>

            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <div className="catalog__films-list">
                    <CardFilm nameFilm={films[0].name} imgPath={films[0].previewImage} id={films[0].id}/>
                    <CardFilm nameFilm={films[1].name} imgPath={films[1].previewImage} id={films[1].id}/>
                    <CardFilm nameFilm={films[2].name} imgPath={films[2].previewImage} id={films[2].id}/>
                    <CardFilm nameFilm={films[3].name} imgPath={films[3].previewImage} id={films[3].id}/>
                    <CardFilm nameFilm={films[4].name} imgPath={films[4].previewImage} id={films[4].id}/>
                    <CardFilm nameFilm={films[5].name} imgPath={films[5].previewImage} id={films[5].id}/>
                    <CardFilm nameFilm={films[6].name} imgPath={films[6].previewImage} id={films[6].id}/>
                    <CardFilm nameFilm={films[7].name} imgPath={films[7].previewImage} id={films[7].id}/>
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
