type CatalogGenresProps = {
  classNameGenres: string;
  nameGenres: string;
  link:string;
}
function CatalogGenres(props :CatalogGenresProps) {
  return (
    <li className={props.classNameGenres}>
      <a href={props.link} className="catalog__genres-link">{props.nameGenres}</a>
    </li>
  );
}
export default CatalogGenres;
