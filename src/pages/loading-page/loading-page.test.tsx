import {render, screen} from '@testing-library/react';
import {Spinner} from './spinner.tsx';


describe('Component: Loading page', () => {
  it('should render correct', () => {
    const expectedText = /Loading/i;

    render(<Spinner/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
