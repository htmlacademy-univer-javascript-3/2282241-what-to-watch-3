type ReviewType = {
  text: string;
  author: string;
  dateTime: string;
  rating: string;
  date: string;
}

function Review({text, author, dateTime, rating, date}:ReviewType) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
