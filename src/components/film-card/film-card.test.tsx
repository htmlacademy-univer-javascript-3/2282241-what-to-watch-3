import {render, screen} from '@testing-library/react';
import {datatype, random, internet, image} from 'faker';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {FilmCard} from './film-card.tsx';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const fakeNameFilm = random.words(2);
    const mockId = datatype.uuid();
    const mockVideoPath = internet.url();
    const mockImgPath = image.image();
    const { withStoreComponent } = withStore(
      <FilmCard nameFilm={fakeNameFilm} id={mockId} videoPath={mockVideoPath} imgPath={mockImgPath}/>,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(fakeNameFilm)).toBeInTheDocument();
  });
});
