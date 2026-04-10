import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/weatherAction.ts";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => ({} as WeatherInfo))
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => ({} as WeatherInfo))
    }
})

export default weatherSlice.reducer