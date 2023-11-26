import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, getComments, getMovie, getPromoFilm, getRelatedMovies,
  hideMovies,
  loadFilms,
  requireAuthorization,
  setFilmsDataLoadingStatus,
  showMoreFilms,
  takeFilms
} from './action.ts';
import {MoviesProps} from '../types/films.ts';
import {Genre} from '../types/genre.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {InfoFilm} from '../types/info-film.ts';
import {CommentsProps} from '../types/comments.ts';

export const InitialNumberFilms = 8;
type InitialStateProps = {
    genre: Genre;
    listFilms: MoviesProps[];
    promoFilm: InfoFilm | null;
    countFilms: number;
    isFilmsDataLoading: boolean;
    authorizationStatus: string;
    film: InfoFilm | null;
    relatedMovies: MoviesProps[];
    comments: CommentsProps[];
}
const initialState: InitialStateProps = {
  genre: 'All genres',
  listFilms: [],
  promoFilm:null,
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
  relatedMovies: [],
  comments: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.countFilms = InitialNumberFilms;
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state, action) => {
      state.listFilms = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.countFilms = state.countFilms + 4;
    })
    .addCase(hideMovies, (state) => {
      state.countFilms = InitialNumberFilms;
    })
    .addCase(loadFilms, (state, action) => {
      state.listFilms = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getMovie, (state, action) => {
      state.film = action.payload;
    })
    .addCase(getRelatedMovies, (state, action) => {
      state.relatedMovies = action.payload;
    })
    .addCase(getComments, (state, action)=>{
      state.comments = action.payload;
    })
    .addCase(getPromoFilm, (state, action)=>{
      state.promoFilm = action.payload;
    });
});
export {reducer};
