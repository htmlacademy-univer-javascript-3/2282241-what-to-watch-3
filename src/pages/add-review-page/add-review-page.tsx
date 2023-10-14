import RatingStars from '../../components/rating-starts/rating-stars.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';

type ReviewPageMovieProps = {
  nameMovieReview: string;
  imgPath: string;
  namePosterPath: string;
}

function AddReviewPage(props: ReviewPageMovieProps) {
  const arrRating = [];
  for (let i = 1; i < 11; i++) {
    arrRating.push(<RatingStars numberRating={i.toString()}/>);
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={props.imgPath} alt={props.nameMovieReview}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className={'logo__link'}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{props.nameMovieReview}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock imgPath={'img/avatar.jpg'}/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={props.namePosterPath} alt={`${props.nameMovieReview} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {arrRating}
            </div>
          </div>
          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReviewPage;
