import {ReactNode} from 'react';
import {Link} from 'react-router-dom';

type ButtonFilmCardProps = {
    children?: ReactNode;
    height: string;
    width: string;
    xlinkHref: string;
    nameButton: string;
    className: string;
    onClick: () => void;
}

export function ButtonFilmCard({children, height, width, xlinkHref, nameButton, className, onClick}: ButtonFilmCardProps) {
  return (
    <button className={className} type="button"
      onClick={onClick}
    >
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
      {children}
    </button>
  );
}

type ButtonPlayProps = {
    children?: ReactNode;
    height: string;
    width: string;
    xlinkHref: string;
    nameButton: string;
    className: string;
    path: string;
}

export function ButtonPlay({children, height, width, xlinkHref, nameButton, className, path}: ButtonPlayProps) {
  return (
    <Link to={path} className={className} type="button">
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
      {children}
    </Link>
  );
}

type ButtonAddMyListProps = {
    children?: ReactNode;
    height: string;
    width: string;
    xlinkHref: string;
    nameButton: string;
    className: string;
    onClick: () => void;
}

export function ButtonAddMyList({children, height, width, xlinkHref, nameButton, className, onClick}: ButtonAddMyListProps) {

  return (
    <button className={className} type="button" onClick={onClick}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
      {children}
    </button>
  );
}
