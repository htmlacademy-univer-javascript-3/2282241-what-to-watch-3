import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmsProps} from "../../mocks/films.ts";
import video from '../../video/_Sintel_ Trailer, Durian Open Movie Project.mp4'

type CardFilmProps = {
    nameFilm: string;
    imgPath: string;
    id: number;
    film: FilmsProps[];
}

function CardFilm({nameFilm, id, imgPath}: CardFilmProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const playerElement = videoRef.current;

        if (!playerElement) {
            return;
        }

        if (isPlaying) {
            setTimeout(() => playerElement.play(), 1000);
            return;
        }

        playerElement.pause();
    }, [isPlaying]);
    const [_, setActiveCardId] = useState(0);
    return (
        <article className="small-film-card catalog__films-card" onMouseEnter={() => setActiveCardId(id)}>
            <div className="small-film-card__image" onMouseLeave={() => setIsPlaying(!isPlaying)}
                 onMouseEnter={() => setIsPlaying(!isPlaying)}>
                {isPlaying ?
                    <video src={video} className="player__video" poster={imgPath} ref={videoRef} muted={true}
                           width="280" height="175"></video> :
                    <img src={imgPath} alt={nameFilm} width="280" height="175"/>}
            </div>
            <h3 className="small-film-card__title">
                <Link to={`/films/${id}`} className="small-film-card__link">{nameFilm}</Link>
            </h3>
        </article>
    );
}

export default CardFilm;
