import ButtonFilmCard from './button-film-card.tsx';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../private-route/private-route.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';

type FilmCardWrapProps = {
    nameMovie: string | null;
    genre: string | null;
    date: number | null;
}

function FilmCardWrap({nameMovie, date, genre}: FilmCardWrapProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{nameMovie}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{date}</span>
        </p>

        <div className="film-card__buttons">
          <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'}
            className={'btn btn--play film-card__button'}
          />
          <ButtonFilmCard height={'20'} width={'19'} xlinkHref={'#add'} nameButton={'My list'}
            className={'btn btn--list film-card__button'}
          >
            <span className="film-card__count">9</span>
          </ButtonFilmCard>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link to={'/films/:id/addreview'} className="btn film-card__button">Add review</Link> : null}
        </div>
      </div>
    </div>
  );
}

export default FilmCardWrap;
