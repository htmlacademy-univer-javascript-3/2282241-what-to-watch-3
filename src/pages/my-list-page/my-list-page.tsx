import Logo from '../../components/logo/logo.tsx';
import Copyright from '../../components/copyright/copyright.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import CardFilm from '../../components/film-card/card-film.tsx';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {UnauthorizedUser} from '../../components/unauthorized-user/unauthorized-user.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {getFavoriteFilms} from '../../store/film-process/film-selectors.ts';

function MyListPage() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
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
          {favoriteFilms.map((x) =>
            (<CardFilm nameFilm={x.name} imgPath={x.previewImage} id={x.id}
              videoPath={x.previewVideoLink}
            />))}
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
