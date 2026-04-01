import {configureStore} from "@reduxjs/toolkit";
import message from "../feachers/message/messageSlice.ts";
import weather from "../feachers/weather/weatherSlice.ts";

export const store = configureStore({
    reducer: {message, weather}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch