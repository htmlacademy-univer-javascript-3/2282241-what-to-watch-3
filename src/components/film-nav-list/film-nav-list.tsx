type FilmNavListProps = {
  className: string;
  name: string;
}

function FilmNavList(props: FilmNavListProps) {
  return (
    <li className={props.className}>
      <a href="#" className="film-nav__link">{props.name}</a>
    </li>
  );
}

export default FilmNavList;
