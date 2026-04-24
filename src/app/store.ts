import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../feachers/api/weatherAction.ts";
import city from "../feachers/city/citySlice.ts";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch