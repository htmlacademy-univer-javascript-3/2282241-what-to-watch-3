import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../hooks/hooks-index.ts';
import {postFavoriteFilms} from '../store/api-actions.ts';

export enum APIRoute {
    Films = '/films',
}

export enum APIRoute {
    Login = '/login',
    Logout = '/logout',
}

export const COUNT_SIMILAR_MOVIES = 4;

export enum NameSpace {
    Genre = 'GENRE',
    Film = 'FILM',
    User = 'USER',
}


export const functionalityButtonList = (authorizationStatus: AuthorizationStatus,
  setInList: (b: boolean) => void,
  isInList: boolean, filmId: string | undefined) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(postFavoriteFilms({filmId, status: !isInList ? 0 : 1}));
    return () => setInList ? setInList(!isInList) : undefined;
  }
  return () => navigate('/login');
};
