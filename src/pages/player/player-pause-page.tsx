import {VideoPlayer} from '../../components/player/player.tsx';
import {films} from '../../mocks/films.ts';
import {PlayerId} from '../../types/player-id-type.ts';

function PlayerPausePage(props: PlayerId) {
    return (
        <VideoPlayer id={props.id} film={films}/>
    );
}

export default PlayerPausePage;
