import MainPage from '../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import {SingIn} from './sing-in/sing-in.tsx';
import MyListPage from '../pages/my-list-page/my-list-page.tsx';
import MoviePage from '../pages/movie-page/movie-page.tsx';
import MovieReviewsPage from '../pages/movie-page/movie-reviews-page.tsx';
import PlayerPage from '../pages/player/player-page.tsx';
import PrivateRoute, {AuthorizationStatus} from './private-route/private-route.tsx';
import {FilmsProps} from '../mocks/films.ts';
import {OverviewProps} from '../mocks/overview.ts';
import {DetailsProps} from '../mocks/details.ts';
import {ReviewMovie} from '../mocks/reviews.ts';
import ScrollToTop from './scroll-to-top/scroll-to-top.ts';
import AddReviewPage from '../pages/add-review-page/add-review-page.tsx';

type AppProps = {
    films: FilmsProps[];
    overview: OverviewProps[];
    details: DetailsProps[];
    review: ReviewMovie[];
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path={'/'}
                       element={<MainPage nameMoviePoster={props.films[0].nameMovie} date={props.films[0].year}
                                          genre={props.films[0].genre}
                                          posterImg={props.films[0].posterPath} film={props.films}
                       />}
                />
                <Route path={'/login'} element={<SingIn classNameEmail={'sign-in__field'}/>}/>
                <Route path={'/mylist'}
                       element={<PrivateRoute
                           authorizationStatus={AuthorizationStatus.NoAuth}
                       ><MyListPage {...props.films}/>
                       </PrivateRoute>}
                />
                <Route path={'/films/:id'}
                       element={<MoviePage imgPath={'img/bg-the-grand-budapest-hotel.jpg'} genre={'Drama'}
                                           nameMovie={'The Grand Budapest Hotel'} date={2014}
                                           imgPathPoster={'img/the-grand-budapest-hotel-poster.jpg'}
                                           rating={'8,9'}
                                           count={'240 rating'}
                                           level={'Very good'}
                                           description={'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'}
                                           director={'Wes Anderson'}
                                           starring={'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'}
                       />}
                />
                <Route path={'/films/1'}
                       element={<MoviePage imgPath={props.films[0].coverMoviePath} genre={props.films[0].genre}
                                           nameMovie={props.films[0].nameMovie} date={props.films[0].year}
                                           imgPathPoster={props.films[0].posterPath}
                                           rating={props.overview[0].rating}
                                           count={props.overview[0].countRating}
                                           level={props.overview[0].descriptionRating}
                                           description={props.overview[0].descriptionMovie}
                                           director={props.overview[0].director}
                                           starring={props.overview[0].actorsList}
                       />}
                />
                <Route path={'/films/2'}
                       element={<MoviePage imgPath={props.films[1].coverMoviePath} genre={props.films[1].genre}
                                           nameMovie={props.films[1].nameMovie} date={props.films[1].year}
                                           imgPathPoster={props.films[1].posterPath}
                                           rating={props.overview[1].rating}
                                           count={props.overview[1].countRating}
                                           level={props.overview[1].descriptionRating}
                                           description={props.overview[1].descriptionMovie}
                                           director={props.overview[1].director}
                                           starring={props.overview[1].actorsList}
                       />}
                />
                <Route path={'/films/3'}
                       element={<MoviePage imgPath={props.films[2].coverMoviePath} genre={props.films[2].genre}
                                           nameMovie={props.films[2].nameMovie} date={props.films[2].year}
                                           imgPathPoster={props.films[2].posterPath}
                                           rating={props.overview[2].rating}
                                           count={props.overview[2].countRating}
                                           level={props.overview[2].descriptionRating}
                                           description={props.overview[2].descriptionMovie}
                                           director={props.overview[2].director}
                                           starring={props.overview[2].actorsList}
                       />}
                />
                <Route path={'/films/4'}
                       element={<MoviePage imgPath={props.films[3].coverMoviePath} genre={props.films[3].genre}
                                           nameMovie={props.films[3].nameMovie} date={props.films[3].year}
                                           imgPathPoster={props.films[3].posterPath}
                                           rating={props.overview[3].rating}
                                           count={props.overview[3].countRating}
                                           level={props.overview[3].descriptionRating}
                                           description={props.overview[3].descriptionMovie}
                                           director={props.overview[3].director}
                                           starring={props.overview[3].actorsList}
                       />}
                />
                <Route path={'/films/5'}
                       element={<MoviePage imgPath={props.films[4].coverMoviePath} genre={props.films[4].genre}
                                           nameMovie={props.films[4].nameMovie} date={props.films[4].year}
                                           imgPathPoster={props.films[4].posterPath}
                                           rating={props.overview[4].rating}
                                           count={props.overview[4].countRating}
                                           level={props.overview[4].descriptionRating}
                                           description={props.overview[4].descriptionMovie}
                                           director={props.overview[4].director}
                                           starring={props.overview[4].actorsList}
                       />}
                />
                <Route path={'/films/6'}
                       element={<MoviePage imgPath={props.films[5].coverMoviePath} genre={props.films[5].genre}
                                           nameMovie={props.films[5].nameMovie} date={props.films[5].year}
                                           imgPathPoster={props.films[5].posterPath}
                                           rating={props.overview[5].rating}
                                           count={props.overview[5].countRating}
                                           level={props.overview[5].descriptionRating}
                                           description={props.overview[5].descriptionMovie}
                                           director={props.overview[5].director}
                                           starring={props.overview[5].actorsList}
                       />}
                />
                <Route path={'/films/7'}
                       element={<MoviePage imgPath={props.films[6].coverMoviePath} genre={props.films[6].genre}
                                           nameMovie={props.films[6].nameMovie} date={props.films[6].year}
                                           imgPathPoster={props.films[6].posterPath}
                                           rating={props.overview[6].rating}
                                           count={props.overview[6].countRating}
                                           level={props.overview[6].descriptionRating}
                                           description={props.overview[6].descriptionMovie}
                                           director={props.overview[6].director}
                                           starring={props.overview[6].actorsList}
                       />}
                />
                <Route path={'/films/8'}
                       element={<MoviePage imgPath={props.films[7].coverMoviePath} genre={props.films[7].genre}
                                           nameMovie={props.films[7].nameMovie} date={props.films[7].year}
                                           imgPathPoster={props.films[7].posterPath}
                                           rating={props.overview[7].rating}
                                           count={props.overview[7].countRating}
                                           level={props.overview[7].descriptionRating}
                                           description={props.overview[7].descriptionMovie}
                                           director={props.overview[7].director}
                                           starring={props.overview[7].actorsList}
                       />}
                />
                <Route path={'/films/:id/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={'img/bg-the-grand-budapest-hotel.jpg'} genre={'Drama'}
                           nameMovie={'The Grand Budapest Hotel'}
                           date={2014} imgPathPoster={'img/the-grand-budapest-hotel-poster.jpg'}
                           review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/1/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[0].coverMoviePath} genre={props.films[0].genre}
                           nameMovie={props.films[0].nameMovie} date={props.films[0].year}
                           imgPathPoster={props.films[0].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/2/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[1].coverMoviePath} genre={props.films[1].genre}
                           nameMovie={props.films[1].nameMovie} date={props.films[1].year}
                           imgPathPoster={props.films[1].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/3/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[2].coverMoviePath} genre={props.films[2].genre}
                           nameMovie={props.films[2].nameMovie} date={props.films[2].year}
                           imgPathPoster={props.films[2].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/4/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[3].coverMoviePath} genre={props.films[3].genre}
                           nameMovie={props.films[3].nameMovie} date={props.films[3].year}
                           imgPathPoster={props.films[3].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/5/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[4].coverMoviePath} genre={props.films[4].genre}
                           nameMovie={props.films[4].nameMovie} date={props.films[4].year}
                           imgPathPoster={props.films[4].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/6/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[5].coverMoviePath} genre={props.films[5].genre}
                           nameMovie={props.films[5].nameMovie} date={props.films[5].year}
                           imgPathPoster={props.films[5].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/7/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[6].coverMoviePath} genre={props.films[6].genre}
                           nameMovie={props.films[6].nameMovie} date={props.films[6].year}
                           imgPathPoster={props.films[6].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/8/review'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage
                           imgPath={props.films[7].coverMoviePath} genre={props.films[7].genre}
                           nameMovie={props.films[7].nameMovie} date={props.films[7].year}
                           imgPathPoster={props.films[7].posterPath} review={props.review}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/1/addreview'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={0}
                                                                                                              film={props.films}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/2/addreview'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={1}
                                                                                                              film={props.films}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/3/addreview'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={2}
                                                                                                              film={props.films}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/4/addreview'}
                       element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={3}
                                                                                                              film={props.films}
                       />
                       </PrivateRoute>}
                />
                <Route path={'/films/5/addreview'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={4} film={props.films}/></PrivateRoute>}/>
                <Route path={'/films/6/addreview'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={5} film={props.films}/></PrivateRoute>}/>
                <Route path={'/films/7/addreview'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={6} film={props.films}/></PrivateRoute>}/>
                <Route path={'/films/8/addreview'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage id={7} film={props.films}/></PrivateRoute>}/>
                <Route path={'/player/:id'} element={<PlayerPage id={0}/>}/>
                <Route path={'/player/1'} element={<PlayerPage id={0}/>}/>
                <Route path={'/player/2'} element={<PlayerPage id={1}/>}/>
                <Route path={'/player/3'} element={<PlayerPage id={2}/>}/>
                <Route path={'/player/4'} element={<PlayerPage id={3}/>}/>
                <Route path={'/player/5'} element={<PlayerPage id={4}/>}/>
                <Route path={'/player/6'} element={<PlayerPage id={5}/>}/>
                <Route path={'/player/7'} element={<PlayerPage id={6}/>}/>
                <Route path={'/player/8'} element={<PlayerPage id={7}/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
