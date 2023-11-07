import GenresItem from './genres-item.tsx';
import {arrayGenres} from './const.ts';

export function ListGenres() {
  return (
    <ul className="catalog__genres-list">
      { arrayGenres.map((itemGenre) =>(
        <GenresItem nameGenres={itemGenre} key={itemGenre}/>))}
    </ul>
  );
}
