import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import {MovieReviewsPage} from './movie-reviews-page.tsx';

describe('Component: MovieReviewsPage', () => {
  it('should render correctly', () => {
    const id = 'movie-reviews-page';
    const { withStoreComponent } = withStore(
      <MovieReviewsPage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
