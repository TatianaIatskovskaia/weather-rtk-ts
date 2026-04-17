import {apiKey, baseURL} from "../../utils/const.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
        const res = await fetch(`${baseURL}?q=${city}&appid=${apiKey}&units=metric`)
        if (!res.ok) {
            throw new Error('Enter correct city name');
        }
        const data = await res.json();
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000,
        }
    }
)
