import {apiKey, baseURL} from "../../utils/const.ts";
import {putWeather} from "../weather/weatherSlice.ts";
import {setMessage} from "../message/messageSlice.ts";
import type {AppDispatch} from "../../app/store.ts";

export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
    try{
    const res = await fetch(`${baseURL}?q=${city}&appid=${apiKey}&units=metric`)
    const data = await res.json();
    dispatch(putWeather({
        country: data.sys.country,
        city: data.name,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset * 1000,
    }))
    dispatch(setMessage(''))
    } catch (e) {
        console.log(e)
        dispatch(setMessage('Enter correct city name'))
        dispatch(putWeather({}))
    }
};