import {render, screen} from '@testing-library/react';
import {MovieDetailsPage} from './movie-details-page.tsx';
import {NameSpace} from '../../const/const.ts';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {makeFakeFilm, makeFakeFilms, makeFakeStore, makeFakeUser} from '../../utils/mock.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {expect} from 'vitest';
import {InitialNumberFilms} from '../../store/film-process/film-process.ts';

describe('Component: MovieDetailsPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <MovieDetailsPage />,
      makeFakeStore({
        [NameSpace.User]:{
          authorizationStatus: AuthorizationStatus.Auth,
          userData: makeFakeUser(),
        },
        [NameSpace.Film]:{
          film: makeFakeFilm(),
          listFilms: makeFakeFilms(),
          promoFilm: null,
          countFilms: InitialNumberFilms,
          isFilmsDataLoading: false,
          isSimilarFilmsLoading: false,
          isChoosedFilmLoading: true,
          isPromoFilmLoading: false,
          isFilmCommentsLoading: false,
          isFavoriteFilm: false,
          relatedMovies: [],
          comments: [],
          favoriteFilms: [],
          genre: 'Comedy'
        }
      })
    );
    render(withHistory(withStoreComponent));
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
