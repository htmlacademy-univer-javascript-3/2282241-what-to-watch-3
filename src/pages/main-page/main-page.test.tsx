import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import MainPage from './main-page.tsx';

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const mainId = 'main-page';
    const { withStoreComponent } = withStore(
      <MainPage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByTestId(mainId)).toBeInTheDocument();
    expect(screen.getByText(/What to watch Ltd/)).toBeInTheDocument();
  });
});
