import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppConstants from "../constants/AppConstants";
import ColorConstants from "../constants/ColorConstants";
import { DefaultThemes, Theme } from "../types";


const updateTheme = createAsyncThunk(
    'appData/updateThemeData',
    async (data: ThemePayload, ThunkApi) => {
        if (typeof data != 'object') {
            await AsyncStorage.setItem(AppConstants.THEME_STORE, JSON.stringify({ type: data }))
            return ThunkApi.fulfillWithValue(data)
        }
        await AsyncStorage.setItem(AppConstants.THEME_STORE, JSON.stringify(data))
        return data
    })

interface initialState {
    data: any,
    theme: Theme
}

type ThemePayload = Theme | DefaultThemes

const appSlice = createSlice({
    name: 'appData',
    initialState: {
        theme: {
            type: 'light',
            ...ColorConstants.light
        }
    } as initialState,
    reducers: {
        // updateTheme(state: initialState, action: PayloadAction<Theme>) {
        //     state.theme = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(updateTheme.fulfilled, (state: initialState, action: PayloadAction<ThemePayload>) => { // pending because state shouls be updated immedeatily
            if (typeof action.payload == 'string') {
                state.theme = { type: action.payload, ...ColorConstants[action.payload] }
            } else {
                state.theme = { ...action.payload, type: 'custom' }
            }
        })
    },
})

export { updateTheme }

export default appSlice.reducer