import {render, screen} from '@testing-library/react';
import {datatype, random, music} from 'faker';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {FilmCardWrap} from './film-card-wrap.tsx';
import {Genre} from '../../types/genre.ts';

describe('Component: FilmCardWrap', () => {
  it('should render correctly', () => {
    const fakeNameFilm = random.words(2);
    const mockId = datatype.uuid();
    const mockGenre = music.genre() as Genre;
    const mockDate = datatype.number({min: 1980, max: 2023});
    const { withStoreComponent } = withStore(
      <FilmCardWrap id={mockId} genre={mockGenre} date={mockDate} nameMovie={fakeNameFilm}/>,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(fakeNameFilm)).toBeInTheDocument();
    expect(screen.getByText(mockGenre)).toBeInTheDocument();
    expect(screen.getByText(mockDate)).toBeInTheDocument();
  });
});
