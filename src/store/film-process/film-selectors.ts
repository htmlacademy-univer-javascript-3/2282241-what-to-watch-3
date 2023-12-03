import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getPromoFilm = (state: State) => state[NameSpace.Film].promoFilm;
export const getFilms = (state: State) => state[NameSpace.Film].listFilms;
export const getShowFilms = (state: State) => state[NameSpace.Film].countFilms;
export const getFilm = (state: State) => state[NameSpace.Film].film;
export const getComments = (state: State) => state[NameSpace.Film].comments;
export const getRelatedMovies = (state: State) => state[NameSpace.Film].relatedMovies;
export const filmsDataLoading = (state: State) => state[NameSpace.Film].isFilmsDataLoading;
