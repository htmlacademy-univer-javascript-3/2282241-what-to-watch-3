import {VideoPlayer} from '../../components/player/player.tsx';
import {films} from '../../mocks/films.ts';

function PlayerPage() {
  return (
    <VideoPlayer film={films} imgPath={'img/player-poster.jpg'}/>
  );
}

export default PlayerPage;
