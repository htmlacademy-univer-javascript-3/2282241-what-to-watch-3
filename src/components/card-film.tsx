type CardFilmType = {
  nameFilm: string;
  imgPath: string;
}

function CardFilm({nameFilm, imgPath}: CardFilmType) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgPath} alt={nameFilm} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{nameFilm}</a>
      </h3>
    </article>
  );
}

export default CardFilm;
