import {describe, expect} from 'vitest';
import {changeGenre, genreProcess} from './genre-process.ts';
import { initialState} from '../film-process/film-process.ts';

describe('GenreProcess Slice', () => {
  it('without additional parameters should return initial state', () => {
    const emptyAction = {type: ''};
    expect(genreProcess.reducer(initialState, emptyAction))
      .toEqual(initialState);
  });

  it('should return change active genre', () => {
    expect(genreProcess.reducer(initialState, changeGenre('Comedy')))
      .toEqual({...initialState, genre: 'Comedy'});
  });
});
