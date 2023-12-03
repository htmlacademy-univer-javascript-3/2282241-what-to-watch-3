import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {Genre} from '../../types/genre.ts';
import {MoviesProps} from '../../types/films.ts';
import {InfoFilm} from '../../types/info-film.ts';
import {CommentsProps} from '../../types/comments.ts';
import {
  fetchCommentsMovie,
  fetchFilmAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchRelatedMovies
} from '../api-actions.ts';


export const InitialNumberFilms = 8;
type InitialStateProps = {
    genre: Genre;
    listFilms: MoviesProps[];
    promoFilm: InfoFilm | null;
    countFilms: number;
    isFilmsDataLoading: boolean;
    isSimilarFilmsLoading: boolean;
    isChoosedFilmLoading: boolean;
    isPromoFilmLoading: boolean;
    isFilmCommentsLoading: boolean;
    film: InfoFilm | null;
    relatedMovies: MoviesProps[];
    comments: CommentsProps[];
}
const initialState: InitialStateProps = {
  genre: 'All genres',
  listFilms: [],
  promoFilm: null,
  countFilms: InitialNumberFilms,
  isFilmsDataLoading: false,
  isSimilarFilmsLoading: false,
  isChoosedFilmLoading: false,
  isPromoFilmLoading: false,
  isFilmCommentsLoading: false,
  film: null,
  relatedMovies: [],
  comments: [],
};
export const FilmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    showMoreFilms(state) {
      state.countFilms = state.countFilms + 4;
    },
    hideMovies(state) {
      state.countFilms = InitialNumberFilms;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.listFilms = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isChoosedFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isChoosedFilmLoading = false;
      })
      .addCase(fetchRelatedMovies.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchRelatedMovies.fulfilled, (state, action) => {
        state.relatedMovies = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
      })
      .addCase(fetchCommentsMovie.pending, (state) => {
        state.isFilmCommentsLoading = true;
      })
      .addCase(fetchCommentsMovie.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isFilmCommentsLoading = false;
      });
  }
});
export const {showMoreFilms, hideMovies} = FilmProcess.actions;
