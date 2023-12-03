import {AuthorizationStatus} from '../../components/private-route/private-route.tsx';
import {NameSpace} from '../../const/const.ts';
import {State} from '../../types/state.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
