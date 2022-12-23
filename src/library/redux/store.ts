import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeReducer';
import messageReducer from './reducer';

export const store = configureStore({
    reducer: {
        message: messageReducer,
        homeSlice: homeSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
