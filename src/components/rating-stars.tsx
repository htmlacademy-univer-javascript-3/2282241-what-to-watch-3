type NumberRatingType = {
  numberRating: string;
}

function RatingStars({numberRating}: NumberRatingType) {
  return (
    <>
      <input className="rating__input" id={'star-'.concat(numberRating)} type="radio" name="rating" value={numberRating}/>
      <label className="rating__label" htmlFor={'star-'.concat(numberRating)}>Rating {numberRating}</label>
    </>
  );
}

export default RatingStars;
