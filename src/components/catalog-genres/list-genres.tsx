import {GenresItem} from './genres-item.tsx';
import {ARRAYGENRES} from './const.ts';

export function ListGenres() {
  return (
    <ul className="catalog__genres-list">
      { ARRAYGENRES.map((itemGenre) =>(
        <GenresItem nameGenres={itemGenre} key={itemGenre}/>))}
    </ul>
  );
}
