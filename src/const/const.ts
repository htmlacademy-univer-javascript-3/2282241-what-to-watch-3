import {useAppSelector} from '../hooks/hooks-index.ts';

export enum APIRoute {
    Films = '/films',
}
export const listFilms = useAppSelector((state) => (state.listFilms));
