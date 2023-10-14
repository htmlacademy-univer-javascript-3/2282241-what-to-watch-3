import MainPage from '../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import {SingIn} from './sing-in/sing-in.tsx';
import MyListPage from '../pages/my-list-page/my-list-page.tsx';
import MoviePage from '../pages/movie-page/movie-page.tsx';
import MovieReviewsPage from '../pages/movie-page/movie-reviews-page.tsx';
import PlayerPage from '../pages/player/player-page.tsx';
import PrivateRoute, {AuthorizationStatus} from './private-route/private-route.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage nameMoviePoster={'The Grand Budapest Hotel'} date={2014} genre={'Drama'} posterImg={'public/img/the-grand-budapest-hotel-poster.jpg'}/>}/>
        <Route path={'/login'} element={<SingIn classNameEmail={'sign-in__field'}/>}/>
        <Route path={'/mylist'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListPage/></PrivateRoute>}/>
        <Route path={'/films/:id'} element={<MoviePage imgPath={'img/bg-the-grand-budapest-hotel.jpg'} genre={'Drama'} nameMovie={'The Grand Budapest Hotel'} date={2014} imgPathPoster={'img/the-grand-budapest-hotel-poster.jpg'}/>}/>
        <Route path={'/films/:id/review'} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MovieReviewsPage imgPath={'img/bg-the-grand-budapest-hotel.jpg'} genre={'Drama'} nameMovie={'The Grand Budapest Hotel'} date={2014} imgPathPoster={'img/the-grand-budapest-hotel-poster.jpg'}/></PrivateRoute>}/>
        <Route path={'/player/:id'} element={<PlayerPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
