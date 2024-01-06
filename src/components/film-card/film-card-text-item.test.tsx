import { render, screen } from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';
import {FilmCardTextItem} from './film-card-text-item.tsx';
import {name} from 'faker';

describe('Component: FilmCardTextItem', () => {
  it('should render correctly', () => {
    const id = 'film-card__details-item';
    const preparedComponent = withHistory(<FilmCardTextItem name={name.findName()} value={9}/>);

    render(preparedComponent);

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
