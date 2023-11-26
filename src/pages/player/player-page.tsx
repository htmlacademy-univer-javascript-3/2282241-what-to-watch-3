import {VideoPlayer} from '../../components/player/player.tsx';
import { MoviesProps} from '../../types/films.ts';

type PlayerProps = {
    listFilms: MoviesProps[];
}

function PlayerPage({listFilms}: PlayerProps) {
  return (
    <VideoPlayer film={listFilms} imgPath={'img/player-poster.jpg'}/>
  );
}

export default PlayerPage;
