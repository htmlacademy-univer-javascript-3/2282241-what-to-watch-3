import {films} from '../mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, takeFilms} from './action.ts';
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
    .addCase(takeFilms, (state,action) => {
      state.listFilms = action.payload;
      // if(state.genre === 'All genres'){
      //   state.listFilms = films;
      // }
      // films.filter((film) => film.genre === action.payload;
      // // state.listFilms = receivingListFilms(state.genre as Genre);
    });


});
export {reducer};
