import {VideoPlayer} from '../../components/player/player.tsx';
import {PlayerId} from '../../types/player-id-type.js';
import {films} from '../../mocks/films.ts';

function PlayerPage(props: PlayerId) {
  return (
    <VideoPlayer id={props.id} film={films} imgPath={'img/player-poster.jpg'}/>
  );
}

export default PlayerPage;
