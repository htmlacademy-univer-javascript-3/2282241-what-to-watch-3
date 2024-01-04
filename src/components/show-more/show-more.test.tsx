import {render, screen} from '@testing-library/react';
import {withHistory} from "../../../utils/mock-component.tsx";
import {ShowMore} from "./show-more.tsx";

describe('Component: Show More', () => {
  it('should render correctly', () => {
    const text = 'Show more';
    const preparedComponent = withHistory(<ShowMore onClickHandler={() => {}}/>);

    render(preparedComponent);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
