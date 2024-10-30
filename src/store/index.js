import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weather/slice";

const rootReducer = combineReducers({
    weather: weatherSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
