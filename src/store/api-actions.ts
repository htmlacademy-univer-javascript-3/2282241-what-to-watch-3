import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {MoviesProps} from '../types/films.ts';
import {
  getComments,
  getMovie, getPromoFilm,
  getRelatedMovies,
  loadFilms,
  requireAuthorization,
  setFilmsDataLoadingStatus
} from './action.ts';
import {APIRoute} from '../const/const.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {AuthData} from '../types/auth-data.js';
import {UserData} from '../types/user-data.js';
import {dropToken, saveToken} from '../services/token.ts';
import {InfoFilm} from '../types/info-film.ts';
import {CommentsProps} from '../types/comments.ts';
import {NewReview} from '../types/new-review.ts';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<MoviesProps[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);
export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<InfoFilm>(`/films/${id}`);
    dispatch(getMovie(data));
  }
);

export const fetchRelatedMovies = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>('data/fetchRelatedMovies', async (id, {dispatch, extra: api}) => {
  const {data} = await api.get<MoviesProps[]>(`/films/${id}/similar`);
  dispatch(getRelatedMovies(data));
});

export const fetchCommentsMovie = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>('comments/fetchCommentsMovie', async (id, {dispatch, extra: api}) => {
  const {data} = await api.get<CommentsProps[]>(`comments/${id}`);
  dispatch(getComments(data));
});

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<InfoFilm>('promo');
    dispatch(getPromoFilm(data));
  }
);

export const addReviewAction = createAsyncThunk<CommentsProps[], NewReview, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'films/review',
  async ({comment, rating}, {dispatch, getState, extra: api}) => {
    const state = getState();
    const id = state.film?.id;
    const {data} = await api.post<CommentsProps[]>(`comments/${id}`, {comment, rating});
    dispatch(getComments);
    return data;
  },
);
