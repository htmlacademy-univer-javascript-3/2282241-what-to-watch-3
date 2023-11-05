import ButtonFilmCard from '../film-card/button-film-card.tsx';
import '../../../style/player-style/player-style.css';
import {FilmsProps} from '../../mocks/films.ts';
import {useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {useParams} from 'react-router-dom';

export type VideoPlayerProps = {
    film: FilmsProps[];
    imgPath:string;
}

export function VideoPlayer({ film, imgPath}: VideoPlayerProps) {
  const {id} = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  return (
    <div className="player">
      <video src={film[Number(id)].movie} className="player__video" poster={imgPath} ref={videoRef} muted={false}></video>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <ButtonFilmCard height={'19'} width={'19'} xlinkHref={cn({'#play-s': !isPlaying},
            {'#pause': isPlaying})} nameButton={cn({'Play': !isPlaying}, {'Pause': isPlaying})}
          className={'player__play'} setIsPlaying={setIsPlaying} isPlaying={isPlaying}
          />
          <div className="player__name">Transpotting</div>
          <ButtonFilmCard height={'27'} width={'27'} xlinkHref={'#full-screen'} nameButton={'Full screen'}
            className={'player__full-screen'} setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    </div>
  );
}
