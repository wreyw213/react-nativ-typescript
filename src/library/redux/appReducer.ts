import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../types";


interface initialState {
    data: any,
    theme: Theme
}
const appSlice = createSlice({
    name: 'home',
    initialState: {} as initialState,
    reducers: {
        updateTheme(state: initialState, action: PayloadAction<Theme>) {
            state.theme = action.payload
        }
    },
})

export const { updateTheme } = appSlice.actions;

export default appSlice.reducer