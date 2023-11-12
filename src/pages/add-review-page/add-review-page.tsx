import RatingStars from '../../components/rating-starts/rating-stars.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {FilmsProps} from "../../types/films.ts";

type ReviewPageMovieProps = {
    film: FilmsProps[];
}

function AddReviewPage(films: ReviewPageMovieProps) {
  const {id} = useParams();
  const [dataReview, setDataReview] = useState({
    rating: 0,
    text: '',
  });
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={films.film[Number(id)].backgroundImage} alt={films.film[Number(id)].name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo className={'logo__link'}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html"
                  className="breadcrumbs__link"
                >{films.film[Number(id)].name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock imgPath={'img/avatar.jpg'}/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={films.film[Number(id)].posterImage} alt={`${films.film[Number(id)].name} poster`}
               width="218" height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <RatingStars numberRating={'1'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'2'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'3'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'4'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'5'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'6'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'7'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'8'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'9'} dataReview={dataReview} setDataReview={setDataReview}/>
              <RatingStars numberRating={'10'} dataReview={dataReview} setDataReview={setDataReview}/>
            </div>
          </div>
          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text" onChange={(event) => {
                setDataReview({...dataReview, text: event.target.innerText});
              }}
            >
            </textarea>
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
