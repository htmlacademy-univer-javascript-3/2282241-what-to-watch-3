import { render, screen } from '@testing-library/react';
import {lorem, name} from 'faker';
import {withHistory} from '../../../utils/mock-component.tsx';
import FilmCardText from './film-card-text.tsx';

describe('Component: FilmCardText', () => {
  it('should render correctly', () => {
    const id = 'film-card__text';
    const preparedComponent = withHistory(<FilmCardText description={lorem.sentences(2)} director={name.findName()} starring={new Array(3).fill(null).map(() => (name.findName()))}/>);

    render(preparedComponent);

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});
