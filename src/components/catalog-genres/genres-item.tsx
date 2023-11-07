import {Genre} from '../../types/genre.ts';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-index.ts';
import {changeGenre} from '../../store/action.ts';
import {Link} from 'react-router-dom';

type CatalogGenresProps = {
    nameGenres: Genre;
}

function GenresItem({ nameGenres}: CatalogGenresProps) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  const changeGenreHandler = () => {
    dispatch(changeGenre(nameGenres));
  };
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === nameGenres})}
    >
      <Link to={'#'} className="catalog__genres-link" onClick={changeGenreHandler}>{nameGenres}</Link>
    </li>
  );
}

export default GenresItem;
