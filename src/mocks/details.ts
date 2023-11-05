import {Genre} from '../types/genre-type.ts';

export type DetailsProps = {
    director: string;
    actorsList: string;
    genre: Genre;
    time: string;
    year: number;
    id: number;
}
export const detailsMovie: DetailsProps[] = [{
  director: ' Wes Anderson',
  actorsList: 'Bill Murray,\n' +
        'Edward Norton,\n' +
        'Jude Law,\n' +
        'Willem Dafoe,\n' +
        'Saoirse Ronan,\n' +
        'Tony Revoloru,\n' +
        'Tilda Swinton,\n' +
        'Tom Wilkinson,\n' +
        'Owen Wilkinson,\n' +
        'Adrien Brody,\n' +
        'Ralph Fiennes,\n' +
        'Jeff Goldblum',
  genre: 'Drama',
  time: '1h 39m',
  year: 2014,
  id: 1
}, {
  director: 'Bryan Singer',
  actorsList: 'Rami Malek\n' +
        'Lucy Boynton\n' +
        'Gwilym Lee\n' +
        'Ben Hardy\n' +
        'Joe Mazzello\n' +
        'Aidan Gillen\n' +
        'Tom Hollander\n' +
        'Mike Myers',
  genre: 'Drama',
  time: '2h 30m',
  year: 2018,
  id: 2
}, {
  director: 'Iain Canning',
  actorsList: 'Michael Fassbender\n' +
        'Marion Cotillard\n' +
        'Paddy Considine\n' +
        'Sean Harris\n' +
        'Jack Reynor\n' +
        'Elizabeth Debicki\n' +
        'David Thewlis',
  genre: 'Drama',
  time: '3h 14m',
  year: 2015,
  id: 3
}, {
  director: 'Michael Mann',
  actorsList: 'Leonardo DiCaprio\n' +
        'Cate Blanchett\n' +
        'Kate Beckinsale\n' +
        'John C. Reilly\n' +
        'Alec Baldwin\n' +
        'Alan Alda\n' +
        'Jude Law',
  genre: 'Drama',
  time: '3h 17m',
  year: 2004,
  id: 4
}, {
  director: 'Lynne Ramsay',
  actorsList: 'Tilda Swinton\n' +
        'John C. Reilly\n' +
        'Ezra Miller',
  genre: 'Thriller',
  time: '1h 15m',
  year: 2011,
  id: 5
}, {
  director: 'Jemaine Clement and Taika Waititi',
  actorsList: 'Taika Waititi\n' +
        'Jemaine Clement\n' +
        'Jonathan Brugh\n' +
        'Cori Gonzalez-Macuer\n' +
        'Stu Rutherford',
  genre: 'Comedy',
  time: '2h 7m',
  year: 2019,
  id: 6
}, {
  director: 'Alejandro G. Iñárritu',
  actorsList: 'Leonardo DiCaprio\n' +
        'Tom Hardy\n' +
        'Domhnall Gleeson\n' +
        'Will Poulter',
  genre: 'Drama',
  time: '3h 2m',
  year: 2015,
  id: 7
}, {
  director: 'Peter Howitt',
  actorsList: 'Rowan Atkinson\n' +
        'Ben Miller',
  genre: 'Comedy',
  time: '1h 39m',
  year: 2003,
  id: 8
},];
