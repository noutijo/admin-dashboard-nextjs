import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Action } from 'redux';

import ProfileReducer from './slices/profile'
import menuSlice from './slices/menuSlice'

const makeStore = () => configureStore({
    reducer: {
        profile: ProfileReducer,
        menu: menuSlice
    },
    devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);