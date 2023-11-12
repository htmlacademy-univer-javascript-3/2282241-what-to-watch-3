import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state.ts";
import {AxiosInstance} from "axios";
import {FilmsProps} from "../types/films.ts";
import {loadFilms, setFilmsDataLoadingStatus} from "./action.ts";
import {APIRoute} from "../const/const.ts";

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
        dispatch(setFilmsDataLoadingStatus(true));
        const {data} = await api.get<FilmsProps[]>(APIRoute.Films);
        dispatch(setFilmsDataLoadingStatus(false));
        dispatch(loadFilms(data));
    },
);
