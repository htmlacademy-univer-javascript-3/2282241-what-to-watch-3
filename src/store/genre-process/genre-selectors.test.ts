import {describe} from 'vitest';
import {NameSpace} from '../../const/const.ts';
import {getGenre} from './genre-selectors.ts';
import {Genre} from '../../types/genre.ts';

describe('Genre selectors', () => {
  const state = {
    [NameSpace.Genre]: {
      genre: 'All genres' as Genre,
    }
  };

  it('should return genre from state', () => {
    const {genre} = state[NameSpace.Genre];
    const result = getGenre(state);
    expect(result).toEqual(genre);
  });
});
