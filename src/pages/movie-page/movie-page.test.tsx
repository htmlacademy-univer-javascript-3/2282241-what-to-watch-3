import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import {MoviePage} from './movie-page.tsx';

describe('Component: MoviePage', () => {
  it('should render correctly', () => {
    const id = 'movie-page';
    const { withStoreComponent } = withStore(
      <MoviePage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
