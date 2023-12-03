import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getGenre = (state: State) => state[NameSpace.Genre].genre;
