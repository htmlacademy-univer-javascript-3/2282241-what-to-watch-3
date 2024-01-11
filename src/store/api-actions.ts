import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import axios, {AxiosInstance} from 'axios';
import {FilmsProps, MoviesProps} from '../types/films.ts';
import {APIRoute} from '../const/const.ts';
import {AuthData} from '../types/auth-data.js';
import {UserData} from '../types/user-data.js';
import {dropToken, saveToken} from '../services/token.ts';
import {InfoFilm} from '../types/info-film.ts';
import {CommentsProps} from '../types/comments.ts';
import {NewReview} from '../types/new-review.ts';
import { toast } from 'react-toastify';
import {PromoFilmType} from '../types/promo-film.ts';

export const fetchFilmsAction = createAsyncThunk<MoviesProps[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<MoviesProps[]>(APIRoute.Films);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  },
);
export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData | void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFilmAction = createAsyncThunk<InfoFilm, string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<InfoFilm>(`/films/${id}`);
    return data;
  }
);

export const fetchRelatedMovies = createAsyncThunk<MoviesProps[], string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>('data/fetchRelatedMovies', async (id, {extra: api}) => {
  try {
    const {data} = await api.get<MoviesProps[]>(`/films/${id}/similar`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.message);
    }
    throw error;
  }
});

export const fetchCommentsMovie = createAsyncThunk<CommentsProps[], string, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>('comments/fetchCommentsMovie', async (id, {extra: api}) => {
  try {
    const {data} = await api.get<CommentsProps[]>(`comments/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.message);
    }
    throw error;
  }
});

export const fetchPromoFilmAction = createAsyncThunk<PromoFilmType, undefined, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'films/fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoFilmType>('promo');
    return data;
  }
);

export const addReviewAction = createAsyncThunk<CommentsProps[], NewReview, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'films/review',
  async ({comment, rating, id}, {extra: api}) => {
    const {data} = await api.post<CommentsProps[]>(`comments/${id}`, {comment, rating});
    return data;
  }
);
export const fetchFavoriteFilms = createAsyncThunk<FilmsProps[], undefined, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<FilmsProps[]>('favorite');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
      throw error;
    }
  },
);
export const postFavoriteFilms = createAsyncThunk<FilmsProps, {
    filmId: string;
    status: number;
}, {
    dispatch: AppDispatch;
    extra: AxiosInstance;
}>(
  'data/postFavoriteFilms',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<FilmsProps>(`favorite/${filmId}/${status}`);
    return data;
  }
);
