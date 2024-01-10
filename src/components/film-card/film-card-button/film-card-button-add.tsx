import {useEffect, useState} from 'react';
import {AuthorizationStatus} from '../../private-route/private-route.tsx';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks-index.ts';
import {fetchFavoriteFilms, postFavoriteFilms} from '../../../store/api-actions.ts';
import {getAuthorizationStatus} from '../../../store/user-process/user-selectors.ts';
import {getFavoriteFilms, getIsFilmFavorite} from '../../../store/film-process/film-selectors.ts';

type ButtonAddMyListProps = {
  filmId: string;
}

export function FilmCardButtonAdd({filmId}: ButtonAddMyListProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const filmsAmount = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavorite = useAppSelector(getIsFilmFavorite(filmId));
  const [refreshPage, setRefreshPage] = useState<boolean>(false);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch, refreshPage]);

  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavoriteFilms({filmId, status: isFavorite ? 0 : 1}));
    } else {
      navigate('login');
    }
    setRefreshPage(!refreshPage);
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleButtonClick}>
      {authorizationStatus === 'AUTH' && isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
      <span>My list</span>
      <span
        className="film-card__count"
      >{authorizationStatus === AuthorizationStatus.Auth ? filmsAmount.length : 0}
      </span>
    </button>
  );
}
