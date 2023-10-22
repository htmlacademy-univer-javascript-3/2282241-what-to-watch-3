type NumberRatingProps = {
    numberRating: string;
    setDataReview: Function;
    dataReview: {
        rating: number;
        text: string;
    };
}

function RatingStars(props: NumberRatingProps) {
  return (
    <>
      <input className="rating__input" id={`star-${props.numberRating}`} type="radio" name="rating"
        value={props.numberRating}
        onClick={() => props.setDataReview({...props.dataReview, rating: props.numberRating})}
      />
      <label className="rating__label" htmlFor={`star-${props.numberRating}`}>Rating {props.numberRating}</label>`
    </>
  );
}

export default RatingStars;
