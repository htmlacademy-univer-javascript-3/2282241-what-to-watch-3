import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import UserBlock from './user-block.tsx';
import {expect} from 'vitest';

describe('Component: UserBlock', () => {
  it('should render correctly', () => {
    const text = 'Sign out';
    const altText = 'User avatar';
    const { withStoreComponent } = withStore(
      <UserBlock />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });
});
