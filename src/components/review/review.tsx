type ReviewProps = {
  text: string;
  author: string;
  dateTime: string;
  rating: string;
  date: string;
}

function Review(props:ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.text}</p>

        <footer className="review__details">
          <cite className="review__author">{props.author}</cite>
          <time className="review__date" dateTime={props.dateTime}>{props.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.rating}</div>
    </div>
  );
}

export default Review;
