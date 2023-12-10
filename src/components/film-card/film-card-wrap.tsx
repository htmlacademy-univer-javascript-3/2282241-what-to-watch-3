import {ButtonAddMyList, ButtonPlay} from './button-film-card.tsx';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../private-route/private-route.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {useState} from 'react';
import cn from 'classnames';
import {functionalityButtonList} from '../../const/const.ts';
import {getFavoriteFilms} from '../../store/film-process/film-selectors.ts';

type FilmCardWrapProps = {
    nameMovie: string | null;
    genre: string | null;
    date: number | null;
    id: string;
}

function FilmCardWrap({nameMovie, date, genre, id}: FilmCardWrapProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isInList, setInList] = useState(false);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{nameMovie}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{date}</span>
        </p>

        <div className="film-card__buttons">
          <ButtonPlay height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'}
            className={'btn btn--play film-card__button'}
            path={`/player/${id}`}
          />
          <ButtonAddMyList height={'20'} width={'19'} xlinkHref={cn({'#add': !isInList},
            {'#in-list': isInList})} nameButton={'My list'}
          onClick={functionalityButtonList(authorizationStatus, setInList, isInList, id)}
          className={'btn btn--list film-card__button'}
          >
            <span className="film-card__count">{favoriteFilms.length}</span>
          </ButtonAddMyList>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link to={'/films/:id/addreview'} className="btn film-card__button">Add review</Link> : null}
        </div>
      </div>
    </div>
  );
}

export default FilmCardWrap;
