import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
})

export const store = configureStore({
    reducer: combineReducers({ counter: counterSlice.reducer }),
})
