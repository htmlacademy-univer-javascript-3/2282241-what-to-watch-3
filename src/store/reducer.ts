import {films} from '../mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, hideMovies, showMoreFilms, takeFilms} from './action.ts';

export const InitialNumberFilms = 8;

const initialState = {
  genre: 'All genres',
  listFilms: films,
  countFilms: InitialNumberFilms
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.countFilms = InitialNumberFilms;
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state,action) => {
      state.listFilms = action.payload;
    })
    .addCase(showMoreFilms, (state)=>{
      state.countFilms = state.countFilms + 4;
    })
    .addCase(hideMovies, (state)=>{
      state.countFilms = InitialNumberFilms;
    });
});
export {reducer};
