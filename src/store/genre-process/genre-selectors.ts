import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getGenre = (state: Pick<State, NameSpace.Genre>) => state[NameSpace.Genre].genre;
