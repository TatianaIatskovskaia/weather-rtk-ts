import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState: '',
    reducers: {
        putCity: (_state, action) => action.payload,
        clearCity: () => ''
    }
})

export default citySlice.reducer
export const {putCity, clearCity} = citySlice.actions