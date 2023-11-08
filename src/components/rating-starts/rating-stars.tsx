import {Dispatch, SetStateAction} from 'react';

type NumberRatingProps = {
  dataReview: {
    rating: number;
    text: string;
  };
  numberRating: string;
  setDataReview: Dispatch<SetStateAction<{ rating: number; text: string }>>;
}

function RatingStars({numberRating, setDataReview, dataReview}: NumberRatingProps) {
  return (
    <>
      <input className="rating__input" id={`star-${numberRating}`} type="radio" name="rating"
        value={numberRating}
        onClick={() => setDataReview({...dataReview, rating: Number(numberRating)})}
      />
      <label className="rating__label" htmlFor={`star-${numberRating}`}>Rating {numberRating}</label>`
    </>
  );
}

export default RatingStars;
