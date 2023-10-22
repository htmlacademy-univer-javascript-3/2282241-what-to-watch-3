import {Player} from '../../components/player/player.tsx';
import {PlayerId} from '../../types.ts';
import {films} from '../../mocks/films.ts';

function PlayerPage(props: PlayerId) {
  return (
    <Player nameButton={'Play'} xlinkHref={'#play-s'} id={props.id} film={films} />
  );
}

export default PlayerPage;
