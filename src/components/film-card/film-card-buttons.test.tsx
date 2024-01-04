import {render, screen} from '@testing-library/react';
import {withHistory} from '../../../utils/mock-component.tsx';
import {FilmCardButton} from './film-card-button.tsx';
import {ButtonAddMyList} from './film-card-button-add.tsx';
import {describe} from 'vitest';
import {ButtonPlay} from './film-card-button-play.tsx';


describe('Components: FilmCardButtons',()=>{
  describe('Component: FilmCardButton', () => {
    it('should render correctly', () => {
      const preparedComponent = withHistory(<FilmCardButton height={'19'} width={'19'} xlinkHref={'#play-s'}
        nameButton={'Play'}
        className={'player__play'}
        onClick={() => {}}
      />);

      render(preparedComponent);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
  describe('Component: ButtonAddMyList', () => {
    it('should render correctly', () => {
      const preparedComponent = withHistory(<ButtonAddMyList height={'19'} width={'19'} xlinkHref={'#play-s'}
        nameButton={'Play'}
        className={'player__play'}
        onClick={() => {}}
      />);

      render(preparedComponent);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Component: ButtonPlay', () => {
    it('should render correctly', () => {
      const preparedComponent = withHistory(<ButtonPlay height={'19'} width={'19'} xlinkHref={'#play-s'}
        nameButton={'Play'}
        className={'player__play'} path={''}
      />);

      render(preparedComponent);

      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });
});
