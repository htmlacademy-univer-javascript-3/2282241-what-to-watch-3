import {render, screen} from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';
import Copyright from './copyright.tsx';

describe('Component: Copyright', () => {
  it('should render correctly', () => {
    const expectedHeaderText = /©/;

    render(withHistory(<Copyright />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
  });
});
