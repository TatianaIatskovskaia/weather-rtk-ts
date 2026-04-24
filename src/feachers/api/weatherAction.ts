// import {apiKey, baseURL} from "../../utils/const.ts";
// import {createAsyncThunk} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {apiKey, baseURL} from "../../utils/const.ts";
import type {WeatherInfo, WeatherInfoResponse} from "../../utils/types";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    // refetchOnMountOrArgChange: true,
    // refetchOnFocus: true,
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${apiKey}&units=metric`,
            keepUnusedDataFor: 10,
            transformResponse: (response: WeatherInfoResponse) => ({
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                pressure: response.main.pressure,
                sunset: response.sys.sunset * 1000,
            })
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