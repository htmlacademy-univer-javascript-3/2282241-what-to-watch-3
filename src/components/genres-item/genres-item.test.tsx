import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {GenresItem} from './genres-item.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {Genre} from '../../types/genre.ts';

describe('Component: GenresItem', () => {
  it('should render correctly', () => {
    const fakeGenre: Genre = 'Comedy';
    const { withStoreComponent } = withStore(
      <GenresItem nameGenres={fakeGenre}/>,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(fakeGenre)).toBeInTheDocument();
  });
});
