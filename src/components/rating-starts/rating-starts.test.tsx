import {render, screen} from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';
import {RatingStars} from './rating-stars.tsx';

describe('Component: RatingStars', () => {
  it('should render correctly', () => {
    const id = /star/;
    const fn = vi.fn();
    const preparedComponent = withHistory(<RatingStars numberRating={'4'} setRating={fn}/>);

    render(preparedComponent);

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
