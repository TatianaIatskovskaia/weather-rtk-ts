import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        putWeather: (_state, action) => action.payload
    }
})

export default weatherSlice.reducer
export const {putWeather} = weatherSlice.actions