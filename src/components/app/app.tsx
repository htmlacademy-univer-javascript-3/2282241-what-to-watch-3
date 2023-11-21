import MainPage from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import {SignIn} from '../sign-in/sign-in.tsx';
import MyListPage from '../../pages/my-list-page/my-list-page.tsx';
import MoviePage from '../../pages/movie-page/movie-page.tsx';
import MovieReviewsPage from '../../pages/movie-page/movie-reviews-page.tsx';
import PlayerPage from '../../pages/player/player-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import ScrollToTop from '../scroll-to-top/scroll-to-top.ts';
import AddReviewPage from '../../pages/add-review-page/add-review-page.tsx';
import MovieDetailsPage from '../../pages/movie-page/movie-details-page.tsx';
import {useAppSelector} from '../../hooks/hooks-index.ts';
import {Spinner} from '../../pages/loading-page/spinner.tsx';

function App() {
  const listFilms = useAppSelector((state) => (state.listFilms));
  const isFilmsDataLoading = useAppSelector((state) => (state.isFilmsDataLoading));
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (isFilmsDataLoading) {
    return (
      <Spinner/>
    );
  }
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={'/'} element={<MainPage nameMoviePoster={listFilms[0].name} date={listFilms[0].released} genre={listFilms[0].genre} posterImg={listFilms[0].previewImage}/>}/>
        <Route path={'/login'} element={<SignIn classNameEmail={'sign-in__field'}/>}/>
        <Route path={'/mylist'} element={<PrivateRoute authorizationStatus={authorizationStatus}><MyListPage {...listFilms}/></PrivateRoute>}/>
        <Route path={'/films/:id'} element={<MoviePage/>}/>
        <Route path={'/films/:id/review'} element={<PrivateRoute authorizationStatus={authorizationStatus}><MovieReviewsPage/></PrivateRoute>}/>
        <Route path={'/films/:id/addreview'} element={<PrivateRoute authorizationStatus={authorizationStatus}><AddReviewPage film={listFilms}/></PrivateRoute>}/>
        <Route path={'/player/:id'} element={<PlayerPage listFilms={listFilms}/>}/>
        <Route path={'/films/:id/details'} element={<MovieDetailsPage/>}></Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;