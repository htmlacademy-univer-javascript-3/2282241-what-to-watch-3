import { render, screen } from '@testing-library/react';
import {withHistory} from '../../../utils/mock-component.tsx';
import FilmRating from './film-rating.tsx';

describe('Component: FilmRating', () => {
  it('should render correctly', () => {
    const id = 'film-rating';
    const preparedComponent = withHistory(<FilmRating rating={9} count={200} level={9}/>);

    render(preparedComponent);

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
