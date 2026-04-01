import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',
        country: '',
        temp: 0,
        pressure: 0,
        sunset: 0,
    },
    reducers: {
        putWeather: (_state, action) => action.payload
    }
})

export default weatherSlice.reducer
export const {putWeather} = weatherSlice.actions