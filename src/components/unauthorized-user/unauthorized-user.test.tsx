import { render, screen } from '@testing-library/react';
import {withHistory} from "../../../utils/mock-component.tsx";
import {UnauthorizedUser} from "./unauthorized-user.tsx";
import {expect} from "vitest";

describe('Component: UnauthorizedUser', () => {
  it('should render correctly', () => {
    const text = 'Sign in';
    const preparedComponent = withHistory(<UnauthorizedUser/>);

    render(preparedComponent);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
