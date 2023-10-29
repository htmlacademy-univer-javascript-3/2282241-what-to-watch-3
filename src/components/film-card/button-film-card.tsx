import {ReactNode} from 'react';

type ButtonFilmCardProps = {
    children?: ReactNode;
    height: string;
    width: string;
    xlinkHref: string;
    nameButton: string;
    className: string;
    setIsPlaying: Function;
    isPlaying: boolean;
}

function ButtonFilmCard({children, height, width, xlinkHref, nameButton, className, setIsPlaying, isPlaying}: ButtonFilmCardProps) {
    return (
        <button className={className} type="button"
                onClick={() => setIsPlaying(!isPlaying)}>
            <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
                <use xlinkHref={xlinkHref}></use>
            </svg>
            <span>{nameButton}</span>
            {children}
        </button>
    );
}

export default ButtonFilmCard;
