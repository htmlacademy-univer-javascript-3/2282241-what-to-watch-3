import { MemoryHistory, createMemoryHistory } from 'history';
import {withHistory, withStore} from '../../../utils/mock-component.tsx';
import App from './app.tsx';
import {render, screen} from '@testing-library/react';
import { makeFakeStore} from '../../../utils/mock.ts';
import {AuthorizationStatus} from '../private-route/private-route.tsx';
import {NameSpace} from '../../const/const.ts';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push('/');

    render(withStoreComponent);

    expect(screen.getByText('All genres')).toBeInTheDocument();

  });
  it('should render "SignIn" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push('/login');

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in').length).toBe(2);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render "MyListPage" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push('/mylist');

    render(withStoreComponent);

    expect(screen.getByText(/My list/)).toBeInTheDocument();
  });

  it('should render "MoviePage" when user navigate to "/films/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push(`/films/${makeFakeStore().FILM.film!.id}`);

    render(withStoreComponent);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/)).toBeInTheDocument();
    expect(screen.getByText(/More like this/)).toBeInTheDocument();
  });

  it('should render "MovieReviewsPage" when user navigate to "/films/:id/review"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push(`/films/${makeFakeStore().FILM.film!.id}/review`);

    render(withStoreComponent);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/)).toBeInTheDocument();
    expect(screen.getByText(/More like this/)).toBeInTheDocument();
  });

  it('should render "AddReviewPage" when user navigate to "/films/:id/addreview"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push(`/films/${makeFakeStore().FILM.film!.id}/addreview`);

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Review text')).toBeInTheDocument();
  });

  it('should render "PlayerPage" when user navigate to "/player/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push(`/player/${makeFakeStore().FILM.film!.id}`);

    render(withStoreComponent);

    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(screen.getByText('Toggler')).toBeInTheDocument();
  });

  it('should render "MovieDetailsPage" when user navigate to "/films/:id/details"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      }
    })
    );
    mockHistory.push(`/films/${makeFakeStore().FILM.film!.id}/details`);

    render(withStoreComponent);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Главную страницу/)).toBeInTheDocument();
  });
});
