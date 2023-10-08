type ButtonFilmCardType = {
  height: string;
  width: string;
  xlinkHref: string;
  nameButton: string;
  className: string;
}

function ButtonFilmCard({height, nameButton, xlinkHref, width, className}: ButtonFilmCardType) {
  return (
    <button className={className} type="button">
      <svg viewBox={'0 0 '.concat(width.concat(' '.concat(height)))} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
    </button>
  );
}

export default ButtonFilmCard;
