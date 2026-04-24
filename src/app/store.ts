import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../feachers/api/weatherAction.ts";
import city from "../feachers/city/citySlice.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch