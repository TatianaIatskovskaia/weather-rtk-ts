// import {apiKey, baseURL} from "../../utils/const.ts";
// import {createAsyncThunk} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {apiKey, baseURL} from "../../utils/const.ts";
import type {WeatherInfoResponse} from "../../utils/types";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfoResponse, string>({
            query: (city: string) => `?q=${city}&appid=${apiKey}&units=metric`,
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi

// export const fetchWeather = createAsyncThunk(
//     'weather/fetchWeather',
//     async (city: string) => {
//         const res = await fetch(`${baseURL}?q=${city}&appid=${apiKey}&units=metric`)
//         if (!res.ok) {
//             throw new Error('Enter correct city name');
//         }
//         const data = await res.json();
//         return {
//             city: data.name,
//             country: data.sys.country,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: data.sys.sunset * 1000,
//         }
//     }
// )