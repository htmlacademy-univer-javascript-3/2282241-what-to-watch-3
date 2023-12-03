import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

type CardFilmProps = {
    nameFilm: string;
    imgPath: string;
    id: string;
    videoPath: string;
}

function CardFilm({ nameFilm, id, imgPath, videoPath}: CardFilmProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const delay = 1000;
  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      setTimeout(() => playerElement.play(), delay);
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  const [, setActiveCardId] = useState('');
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActiveCardId(id)}>
      <div className="small-film-card__image" onMouseLeave={() => setIsPlaying(!isPlaying)}
        onMouseEnter={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ?
          <video src={videoPath} className="player__video" poster={imgPath} ref={videoRef} muted
            width="280" height="175"
          >
          </video> :
          <img src={imgPath} alt={nameFilm} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{nameFilm}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;
