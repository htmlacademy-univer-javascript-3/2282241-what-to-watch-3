import {Genre} from '../types/genre.ts';
import {films, FilmsProps} from '../mocks/films.ts';

export const receivingListFilms = (genre: Genre) :FilmsProps[]=> {
  if (genre === 'All genres') {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
