import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, hideMovies, loadFilms, setFilmsDataLoadingStatus, showMoreFilms, takeFilms} from './action.ts';
import {FilmsProps} from '../types/films.ts';
import {Genre} from '../types/genre.ts';

export const InitialNumberFilms = 8;
type InitialStateProps = {
    genre: Genre;
    listFilms: FilmsProps[];
    countFilms: number;
    isFilmsDataLoading: boolean;
}
const initialState: InitialStateProps = {
  genre: 'All genres',
  listFilms: [],
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false
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
    });

});
export {reducer};
