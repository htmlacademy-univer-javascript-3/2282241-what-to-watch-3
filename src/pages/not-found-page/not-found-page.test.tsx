import {render, screen} from '@testing-library/react';
import NotFoundPage from './not-found-page.tsx';
import {withHistory} from '../../utils/mock-component.tsx';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404';
    const expectedLinkText = 'Главную страницу';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
