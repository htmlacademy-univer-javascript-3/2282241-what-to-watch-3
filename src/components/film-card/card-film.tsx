import {useState} from 'react';
import {Link} from 'react-router-dom';

type CardFilmProps = {
  nameFilm: string;
  imgPath: string;
  id: number;
}

function CardFilm(props: CardFilmProps) {
  const [activeCardId, setActiveCardId] = useState(0);
  console.log(activeCardId);
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCardId(props.id)}>
      <div className="small-film-card__image">
        <img src={props.imgPath} alt={props.nameFilm} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className="small-film-card__link">{props.nameFilm}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;
