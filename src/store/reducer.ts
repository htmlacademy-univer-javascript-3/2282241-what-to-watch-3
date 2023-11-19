import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  hideMovies,
  loadFilms,
  requireAuthorization,
  setFilmsDataLoadingStatus,
  showMoreFilms,
  takeFilms
} from './action.ts';
import {FilmsProps} from '../types/films.ts';
import {Genre} from '../types/genre.ts';
import {AuthorizationStatus} from "../components/private-route/private-route.tsx";

export const InitialNumberFilms = 8;
type InitialStateProps = {
    genre: Genre;
    listFilms: FilmsProps[];
    countFilms: number;
    isFilmsDataLoading: boolean;
  authorizationStatus: string;
}
const initialState: InitialStateProps = {
  genre: 'All genres',
  listFilms: [],
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});
export {reducer};
