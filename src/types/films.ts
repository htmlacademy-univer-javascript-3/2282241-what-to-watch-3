import {Genre} from './genre.ts';

export type FilmsProps = {
    posterImage: string;
    previewImage: string;
    backgroundImage: string;
    name: string;
    genre: Genre;
    released: number;
    movie: string;
    id: string;
    description: string;
    rating: number;
    descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
    scoresCount: number;
    director: string;
    starring: [];
    videoLink:string;
    // "id": "aba664c3-bdf3-4fb3-b8f3-42e007864bbf",
    backgroundColor: string;
    runTime: 99;
    isFavorite: false;
}
