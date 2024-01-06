import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import MyListPage from './my-list-page.tsx';

describe('Component: MyListPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <MyListPage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(/My list/)).toBeInTheDocument();
  });
});
