import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.ts';
import {MoviesProps} from '../types/films.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {InfoFilm} from '../types/info-film.ts';
import {CommentsProps} from '../types/comments.ts';

export const changeGenre = createAction<Genre>('genre/change');
export const takeFilms = createAction<MoviesProps[]>('genre/films');
export const showMoreFilms = createAction('more/films');
export const hideMovies = createAction('hide/films');
export const loadFilms = createAction<MoviesProps[]>('load/films');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getMovie = createAction<InfoFilm | null>('get/films');
export const getRelatedMovies = createAction<MoviesProps[]>('getRelated/movies');
export const getComments = createAction<CommentsProps[]>('get/comments');
export const getPromoFilm = createAction<InfoFilm>('get/promo');
export const addReview = createAction<CommentsProps[]>('addReview');
