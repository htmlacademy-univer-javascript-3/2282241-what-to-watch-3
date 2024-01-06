import {describe, expect} from 'vitest';
import { InitialNumberFilms} from './film-process.ts';
import {NameSpace} from '../../const/const.ts';
import {
  filmsDataLoading,
  getComments, getFavoriteFilms,
  getFilm,
  getFilms,
  getPromoFilm,
  getRelatedMovies,
  getShowFilms
} from './film-selectors.ts';
import {makeFakeFilms} from '../../utils/mock.ts';
import {Genre} from '../../types/genre.ts';

describe('Film selectors', () => {
  const state = {
    [NameSpace.Film]: {
      genre: 'All genres' as Genre,
      listFilms: makeFakeFilms(),
      promoFilm: null,
      countFilms: InitialNumberFilms,
      isFilmsDataLoading: false,
      isSimilarFilmsLoading: false,
      isChoosedFilmLoading: false,
      isPromoFilmLoading: false,
      isFilmCommentsLoading: false,
      isFavoriteFilm: false,
      film: null,
      relatedMovies: [],
      comments: [],
      favoriteFilms: [],
    }
  };

  it('should return films from state', () => {
    const {listFilms} = state[NameSpace.Film];
    const result = getFilms(state);
    expect(result).toEqual(listFilms);
  });

  it('should return promo films from state', () => {
    const {promoFilm} = state[NameSpace.Film];
    const result = getPromoFilm(state);
    expect(result).toEqual(promoFilm);
  });

  it('should return count films from state', () => {
    const {countFilms} = state[NameSpace.Film];
    const result = getShowFilms(state);
    expect(result).toEqual(countFilms);
  });

  it('should return film from state', () => {
    const {film} = state[NameSpace.Film];
    const result = getFilm(state);
    expect(result).toEqual(film);
  });

  it('should return comments from state', () => {
    const {comments} = state[NameSpace.Film];
    const result = getComments(state);
    expect(result).toEqual(comments);
  });

  it('should return related movies from state', () => {
    const {relatedMovies} = state[NameSpace.Film];
    const result = getRelatedMovies(state);
    expect(result).toEqual(relatedMovies);
  });

  it('should return is loading from state', () => {
    const {isFilmsDataLoading} = state[NameSpace.Film];
    const result = filmsDataLoading(state);
    expect(result).toEqual(isFilmsDataLoading);
  });

  it('should return favorite films from state', () => {
    const {favoriteFilms} = state[NameSpace.Film];
    const result = getFavoriteFilms(state);
    expect(result).toEqual(favoriteFilms);
  });
});
