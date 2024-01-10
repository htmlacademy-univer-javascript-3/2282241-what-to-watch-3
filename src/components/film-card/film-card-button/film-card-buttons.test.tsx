import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../../utils/mock-component.tsx';
import {FilmCardButton} from './film-card-button.tsx';
import {FilmCardButtonAdd} from './film-card-button-add.tsx';
import {describe} from 'vitest';
import {FilmCardButtonPlay} from './film-card-button-play.tsx';
import {makeFakeStore} from '../../../utils/mock.ts';


describe('Components: FilmCardButtons',()=>{
  describe('Component: FilmCardButton', () => {
    it('should render correctly', () => {
      const onClickMock = vi.fn();
      const preparedComponent = withHistory(<FilmCardButton height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'player__play'} onClick={onClickMock}/>);

      render(preparedComponent);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
  describe('Component: ButtonAddMyList', () => {
    it('should render correctly', () => {
      const { withStoreComponent } = withStore(
        <FilmCardButtonAdd filmId={'1'} />,
        makeFakeStore()
      );

      render(withHistory(withStoreComponent));

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Component: ButtonPlay', () => {
    it('should render correctly', () => {
      const preparedComponent = withHistory(<FilmCardButtonPlay height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'player__play'} path={''}/>);

      render(preparedComponent);

      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });
});
