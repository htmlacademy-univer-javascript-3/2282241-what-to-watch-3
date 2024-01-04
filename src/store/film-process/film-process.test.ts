import {describe, expect} from 'vitest';
import {FilmProcess, hideMovies, initialState, showMoreFilms} from './film-process.ts';

describe('FilmProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = FilmProcess.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const result = FilmProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should show more films action', () => {
    const countFilms = 12;
    const result = FilmProcess.reducer(initialState, showMoreFilms);
    expect(result.countFilms).toEqual(countFilms);
  });

  it('should hide films action', () => {
    const countFilms = 8;
    const result = FilmProcess.reducer(initialState, hideMovies);
    expect(result.countFilms).toEqual(countFilms);
  });
});
