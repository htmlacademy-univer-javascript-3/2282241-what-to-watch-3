import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import {PlayerPage} from './player-page.tsx';

describe('Component: PlayerPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <PlayerPage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(screen.getByText('Toggler')).toBeInTheDocument();
  });
});
