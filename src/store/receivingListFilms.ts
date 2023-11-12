import {Genre} from '../types/genre.ts';
import {FilmsProps} from '../types/films.ts';
import {listFilms} from '../const/const.ts';
// import {films, FilmsProps} from '../mocks/films.ts';

export const receivingListFilms = (genre: Genre) :FilmsProps[]=> {
  if (genre === 'All genres') {
    return listFilms;
  }
  return listFilms.filter((film) => film.genre === genre);
};
