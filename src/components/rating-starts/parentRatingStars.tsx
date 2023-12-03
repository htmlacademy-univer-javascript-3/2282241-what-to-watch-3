import RatingStars from './rating-stars.tsx';
import {ChangeEvent} from 'react';

type ParentRatingStarsProps = {
    handleRatingChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

export function ParentRatingStars(handleRatingChange: ParentRatingStarsProps) {
  return (
  //<html>TS2322: Type 'ParentRatingStarsProps' is not assignable to type 'ChangeEventHandler&lt;HTMLInputElement&gt;'.<br/>Type 'ParentRatingStarsProps' provides no match for the signature '(event: ChangeEvent&lt;HTMLInputElement&gt;): void'.
    <>
      <RatingStars numberRating={'1'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'2'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'3'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'4'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'5'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'6'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'7'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'8'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'9'} setRating={handleRatingChange}/>
      <RatingStars numberRating={'10'} setRating={handleRatingChange}/>
    </>
  );
}
