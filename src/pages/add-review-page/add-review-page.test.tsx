import {render, screen} from '@testing-library/react';
import {NameSpace} from '../../const/const.ts';
import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {makeFakeFilm, makeFakeFilms, makeFakeStore} from '../../utils/mock.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {expect} from 'vitest';
import {InitialNumberFilms} from '../../store/film-process/film-process.ts';
import {AddReviewPage} from './add-review-page.tsx';
import userEvent from '@testing-library/user-event';

describe('Component: AddReviewPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <AddReviewPage />,
      makeFakeStore({
        [NameSpace.User]:{
          authorizationStatus: AuthorizationStatus.Auth,
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
    expect(screen.getByText('Post')).toBeInTheDocument();
  });

  it('should display entered text', async () => {
    const withHistoryComponent = withHistory(<AddReviewPage />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const mockText = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('comment'), mockText);

    expect(screen.getByDisplayValue(mockText)).toBeInTheDocument();
  });
});
