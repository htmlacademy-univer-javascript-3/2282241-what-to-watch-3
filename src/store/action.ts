import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.ts';

export const changeGenre = createAction<Genre>('genre/change');
export const takeFilms = createAction('genre/films');
export const isActiveFilm = createAction<Genre>('active/film');
