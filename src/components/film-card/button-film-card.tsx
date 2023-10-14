import {ReactNode} from 'react';

type ButtonFilmCardProps = {
  children?: ReactNode;
  height: string;
  width: string;
  xlinkHref: string;
  nameButton: string;
  className: string;
}

function ButtonFilmCard(props: ButtonFilmCardProps) {
  return (
    <button className={props.className} type="button">
      <svg viewBox={`0 0 ${props.width} ${props.height}`} width={props.width} height={props.height}>
        <use xlinkHref={props.xlinkHref}></use>
      </svg>
      <span>{props.nameButton}</span>
      {props.children}
    </button>
  );
}

export default ButtonFilmCard;
