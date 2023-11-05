import CatalogGenres from './catalog-genres.tsx';
import {arrayGenres} from './const.ts';
import {useAppDispatch} from '../../hooks/hooks-index.ts';
import {isActiveFilm, takeFilms} from '../../store/action.ts';
import {Genre} from '../../types/genre.ts';

export function ListGenres() {
  const dispatch = useAppDispatch();
  const handle = (genre: Genre)=>{
    dispatch(isActiveFilm(genre));
    dispatch(takeFilms());
  };
  return (
    <ul className="catalog__genres-list">
      { arrayGenres.map((itemGenre) =>(
        <CatalogGenres classNameGenres={'catalog__genres-item'} nameGenres={itemGenre}
          setSelectedGenre={handle}
        />
      ))}

    </ul>
  );
}
