import { render, screen } from '@testing-library/react';
import {withHistory} from "../../../utils/mock-component.tsx";
import Tab from "./tab.tsx";

describe('Component: Tab', () => {
  it('should render correctly', () => {
    const preparedComponent = withHistory(<Tab className={'film-nav__item'} name={'Details'} link={`/films/${1}/details`}/>);

    render(preparedComponent);

    expect(screen.getByTestId('tab')).toBeInTheDocument();
  });
});
