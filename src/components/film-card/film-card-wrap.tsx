import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../private-route/private-route.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import { FilmCardButtonAdd } from './film-card-button/film-card-button-add.tsx';
import {FilmCardButtonPlay} from './film-card-button/film-card-button-play.tsx';

type FilmCardWrapProps = {
    nameMovie: string | null;
    genre: string | null;
    date: number | null;
    id: string;
}

export function FilmCardWrap({nameMovie, date, genre, id}: FilmCardWrapProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <div className="film-card__wrap" data-testid='film-card__wrap'>
      <div className="film-card__desc">
        <h2 className="film-card__title">{nameMovie}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{date}</span>
        </p>

        <div className="film-card__buttons">
          <FilmCardButtonPlay height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'}
            className={'btn btn--play film-card__button'}
            path={`/player/${id}`}
          />

          <FilmCardButtonAdd filmId={id}/>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link to={'/films/:id/addreview'} className="btn film-card__button">Add review</Link> : null}
        </div>
      </div>
    </div>
  );
}
