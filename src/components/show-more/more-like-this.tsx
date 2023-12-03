import CardFilm from '../film-card/card-film.tsx';
import {COUNT_SIMILAR_MOVIES} from '../../const/const.ts';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {getRelatedMovies} from '../../store/film-process/film-selectors.ts';

export function MoreLikeThis(){
  const relatedMovies = useAppSelector(getRelatedMovies);
  return(
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {relatedMovies.map((i) =>
          <CardFilm nameFilm={i.name} imgPath={i.previewImage} id={i.id} videoPath={i.previewVideoLink} key={i.id}/>).slice(0, COUNT_SIMILAR_MOVIES)}
      </div>
    </section>
  );
}
