import {datatype, lorem, name} from 'faker';
import { render, screen } from '@testing-library/react';
import {withHistory} from '../../../utils/mock-component.tsx';
import Review from './review.tsx';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const preparedComponent = withHistory(<Review text={lorem.sentences(3)} date={datatype.number({min: 1980, max: 2023}).toString()} author={name.findName()} rating={datatype.number({min: 0, max: 10, precision: 0.1})}/>);

    render(preparedComponent);

    expect(screen.getByTestId('review')).toBeInTheDocument();
  });
});
