import MainPage from '../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import {SingIn} from './sing-in/sing-in.tsx';
import MyListPage from '../pages/my-list-page/my-list-page.tsx';
import MoviePage from '../pages/movie-page/movie-page.tsx';
import MovieReviewsPage from '../pages/movie-page/movie-reviews-page.tsx';
import PlayerPage from '../pages/player/player-page.tsx';
import PrivateRoute, {AuthorizationStatus} from './private-route/private-route.tsx';
import { FilmsProps} from '../mocks/films.ts';
import { OverviewProps} from '../mocks/overview.js';
import {DetailsProps} from '../mocks/details.js';
import {ReviewMovie} from '../mocks/reviews.js';
import ScrollToTop from './scroll-to-top/scroll-to-top.js';
import AddReviewPage from '../pages/add-review-page/add-review-page.tsx';
import MovieDetailsPage from '../pages/movie-page/movie-details-page.tsx';

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
                <Route path={'/'} element={<MainPage nameMoviePoster={props.films[0].nameMovie} date={props.films[0].year} genre={props.films[0].genre} posterImg={props.films[0].posterPath} film={props.films}/>}/>
                <Route path={'/login'} element={<SingIn classNameEmail={'sign-in__field'}/>}/>
                <Route path={'/mylist'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListPage {...props.films}/></PrivateRoute>}/>
                <Route path={'/films/:id'} element={<MoviePage />}/>
                <Route path={'/films/:id/review'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage/></PrivateRoute>}/>
                <Route path={'/films/:id/addreview'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><AddReviewPage film={props.films}/></PrivateRoute>}/>
                <Route path={'/player/:id'} element={<PlayerPage/>}/>
                <Route path={'/films/:id/details'} element={<MovieDetailsPage/>}></Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
