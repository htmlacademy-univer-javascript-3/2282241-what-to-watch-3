import {Genre} from '../../types/genre.ts';

type CatalogGenresProps = {
    classNameGenres: string;
    nameGenres: Genre;
    setSelectedGenre: (genre: Genre) => void;
}

function CatalogGenres({classNameGenres, nameGenres, setSelectedGenre}: CatalogGenresProps) {
    return (
        <li className={classNameGenres} onClick={() => setSelectedGenre(nameGenres)}>
            <a className="catalog__genres-link">{nameGenres}</a>
        </li>
    );
}

export default CatalogGenres;
