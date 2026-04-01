import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name...',
    reducers: {
        setMessage: (_state, action) => action.payload
    }
})

export default messageSlice.reducer
export const {setMessage} = messageSlice.actions