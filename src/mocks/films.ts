import {Genre} from "../types/genre-type.ts";

export type FilmsProps = {
  posterPath: string;
  coverMoviePath: string;
  nameMovie: string;
  genre: Genre;
  year: number;
  movie: string;
  id: number;
}
export const films: FilmsProps[] = [{
  posterPath: 'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Drama',
  year: 2014,
  movie: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  id: 1
},
{
  posterPath: 'public/img/bohemian-rhapsody.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Bohemian Rhapsody',
  genre: 'Drama',
  year: 2018,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 2
},
{
  posterPath: 'public/img/macbeth.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Macbeth',
  genre: 'Drama',
  year: 2015,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 3
},
{
  posterPath: 'public/img/aviator.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Aviator',
  genre: 'Drama',
  year: 2004,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 4
},
{
  posterPath: 'public/img/we-need-to-talk-about-kevin.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'We need to talk about Kevin',
  genre: 'Thriller',
  year: 2011,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 5
}, {
  posterPath: 'public/img/what-we-do-in-the-shadows.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'What We Do in the Shadows',
  genre: 'Comedy',
  year: 2019,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 6
}, {
  posterPath: 'public/img/revenant.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Revenant',
  genre: 'Drama',
  year: 2015,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 7
}, {
  posterPath: 'public/img/johnny-english.jpg',
  coverMoviePath: 'img/bg-the-grand-budapest-hotel.jpg',
  nameMovie: 'Johnny English',
  genre: 'Comedy',
  year: 2003,
  movie: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  id: 8
}];

