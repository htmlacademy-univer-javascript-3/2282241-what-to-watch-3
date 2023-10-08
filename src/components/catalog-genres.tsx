type CatalogGenresType = {
  classNameGenres: string;
  nameGenres: string;
  link:string;
}
function CatalogGenres({classNameGenres, nameGenres, link} :CatalogGenresType) {
  return (
    <li className={classNameGenres}>
      <a href={link} className="catalog__genres-link">{nameGenres}</a>
    </li>
  );
}
export default CatalogGenres;
