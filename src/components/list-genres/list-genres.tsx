import {GenresItem} from '../genres-item/genres-item.tsx';
import {ARRAY_GENRES} from './list-genres.const.ts';

export function ListGenres() {
  return (
    <ul className="catalog__genres-list">
      { ARRAY_GENRES.map((itemGenre) =>(
        <GenresItem nameGenres={itemGenre} key={itemGenre}/>))}
    </ul>
  );
}
