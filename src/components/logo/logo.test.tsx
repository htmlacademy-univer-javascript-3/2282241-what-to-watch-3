import Logo from './logo';
import { render, screen } from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const preparedComponent = withHistory(<Logo className={'logo__link'}/>);

    render(preparedComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
