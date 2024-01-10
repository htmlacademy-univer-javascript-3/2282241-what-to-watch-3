import {Genre} from './genre.ts';

export type PromoFilmType = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: Genre;
  released: number;
  isFavorite: boolean;
};
