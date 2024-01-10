import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {ListGenres} from './list-genres.tsx';
import {NameSpace} from '../../const/const.ts';
import {InfoFilm} from '../../types/info-film.ts';

describe('Component: ListGenres', () => {
  it('should render correct', () => {
    const {withStoreComponent, mockStore} = withStore(<ListGenres />, makeFakeStore());
    const filmsSlice = mockStore.getState()[NameSpace.Film] as InfoFilm;

    render(withHistory(withStoreComponent));

    expect(screen.getAllByRole('listitem')).toHaveLength(filmsSlice.genre.length);
  });
});
