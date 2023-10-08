type FilmNavListType = {
  className: string;
  name: string;
}

function FilmNavList({className, name}: FilmNavListType) {
  return (
    <li className={className}>
      <a href="#" className="film-nav__link">{name}</a>
    </li>
  );
}

export default FilmNavList;
