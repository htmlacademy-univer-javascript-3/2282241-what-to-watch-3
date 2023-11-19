import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, getMovie,
  hideMovies,
  loadFilms,
  requireAuthorization,
  setFilmsDataLoadingStatus,
  showMoreFilms,
  takeFilms
} from './action.ts';
import {FilmsProps} from '../types/films.ts';
import {Genre} from '../types/genre.ts';
import {AuthorizationStatus} from '../components/private-route/private-route.tsx';
import {InfoFilm} from '../types/info-film.ts';

export const InitialNumberFilms = 8;
type InitialStateProps = {
    genre: Genre;
    listFilms: FilmsProps[];
    countFilms: number;
    isFilmsDataLoading: boolean;
    authorizationStatus: string;
    film: InfoFilm | null;
}
const initialState: InitialStateProps = {
  genre: 'All genres',
  listFilms: [],
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
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
    });
});
export {reducer};
