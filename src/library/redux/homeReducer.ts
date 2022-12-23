import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type obj = {
    id: number,
    title: string
}


interface initialState {
    data: Array<obj>,
    loading: boolean
}
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        data: [] as obj[],
        loading: true,
    },
    reducers: {
        setHomeData(state: initialState, action: PayloadAction<Array<obj>>) {
            state.data = action.payload
        }
    },
})

export const { setHomeData } = homeSlice.actions;

export default homeSlice.reducer