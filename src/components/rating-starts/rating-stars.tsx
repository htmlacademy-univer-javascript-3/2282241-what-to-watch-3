type NumberRatingProps = {
  numberRating: string;
}

function RatingStars(props: NumberRatingProps) {
  return (
    <>
      <input className="rating__input" id={`star-${props.numberRating}`} type="radio" name="rating" value={props.numberRating}/>
      <label className="rating__label" htmlFor={`star-${props.numberRating}`}>Rating {props.numberRating}</label>`
    </>
  );
}

export default RatingStars;
