import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mock.ts';
import {expect} from 'vitest';
import {SignInPage} from './sign-in.tsx';
import userEvent from '@testing-library/user-event';

describe('Component: SignInPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <SignInPage />,
      makeFakeStore()
    );
    render(withHistory(withStoreComponent));

    expect(screen.getAllByText('Sign in')).toHaveLength(2);
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should display entered values', async () => {
    const mockEmail = 'mail@test.com';
    const mockPassword = '1234';
    const withHistoryComponent = withHistory(<SignInPage />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('user-email'), mockEmail);
    await userEvent.type(screen.getByTestId('user-password'), mockPassword);

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
  });
});
