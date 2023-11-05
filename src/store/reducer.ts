import {films} from '../mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, isActiveFilm, takeFilms} from './action.ts';
// import {receivingListFilms} from './receivingListFilms.ts';
// import {Genre} from '../types/genre.ts';

const initialState = {
  genre: 'All genres',
  listFilms: films,
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(isActiveFilm, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(takeFilms, (state) => {
      if(state.genre === 'All genres'){
        state.listFilms = films;
      }
      films.filter((film) => film.genre === state.genre);
      // state.listFilms = receivingListFilms(state.genre as Genre);
    });


});
export {reducer};
