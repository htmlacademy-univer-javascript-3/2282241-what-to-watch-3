import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.ts';
import {FilmsProps} from '../types/films.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';

export const changeGenre = createAction<Genre>('genre/change');
export const takeFilms = createAction<FilmsProps[]>('genre/films');
export const showMoreFilms = createAction('more/films');
export const hideMovies = createAction('hide/films');
export const loadFilms = createAction<FilmsProps[]>('load/films');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
