import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";


const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => ('Loading...'))
            .addCase(fetchWeather.fulfilled, () => (''))
            .addCase(fetchWeather.rejected, () => ('Error'))
    }
})

export default messageSlice.reducer