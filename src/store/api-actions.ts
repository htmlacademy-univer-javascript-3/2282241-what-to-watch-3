import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {FilmsProps} from '../types/films.ts';
import {getMovie, loadFilms, requireAuthorization, setFilmsDataLoadingStatus} from './action.ts';
import {APIRoute} from '../const/const.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {AuthData} from '../types/auth-data.js';
import {UserData} from '../types/user-data.js';
import {dropToken, saveToken} from '../services/token.ts';
import {InfoFilm} from "../types/info-film.ts";

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
        dispatch(setFilmsDataLoadingStatus(true));
        const {data} = await api.get<FilmsProps[]>(APIRoute.Films);
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
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchFilm',
    async (id, {dispatch, extra: api}) => {
        dispatch(setFilmsDataLoadingStatus(true));
        const {data} = await api.get<InfoFilm>(`films/${id}`);
        dispatch(setFilmsDataLoadingStatus(false));
        dispatch(getMovie(data));
    }
);
