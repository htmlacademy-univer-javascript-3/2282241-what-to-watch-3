import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {MoreLikeThis} from './more-like-this.tsx';

describe('Component: MoreLikeThis', () => {
  it('should render correctly', () => {
    const text = 'More like this';
    const { withStoreComponent } = withStore(
      <MoreLikeThis />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
