import {VideoPlayer} from '../../components/player/player.tsx';
import {FilmsProps} from "../../types/films.ts";
// import {films} from '../../mocks/films.ts';

type PlayerProps = {
    listFilms: FilmsProps[];
}

function PlayerPage({listFilms}: PlayerProps) {
    return (
        <VideoPlayer film={listFilms} imgPath={'img/player-poster.jpg'}/>
    );
}

export default PlayerPage;
