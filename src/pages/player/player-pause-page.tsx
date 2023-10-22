import {Player} from '../../components/player/player.tsx';
import {films} from '../../mocks/films.ts';
import {PlayerId} from '../../types.ts';

function PlayerPausePage(props: PlayerId) {
  return (
    <Player nameButton={'Pause'} xlinkHref={'#pause'} id={props.id} film={films}/>
  );
}

export default PlayerPausePage;
