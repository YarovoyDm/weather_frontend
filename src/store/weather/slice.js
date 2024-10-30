import { createSlice } from "@reduxjs/toolkit";
import { WEATHER_SLICE_NAME } from "../../constants/store";

const initialWeatherState = {
    weather: {
        location: "",
        image: "",
        temperature: "",
        type: "",
    },
    history: [],
};

const weatherSlice = createSlice({
    name: WEATHER_SLICE_NAME,
    initialState: initialWeatherState,
    reducers: {
        updateWeather(state, action) {
            state.weather = action.payload;
        },
        updateHistory(state, action) {
            state.history = action.payload;
        },
    },
});

export default weatherSlice.reducer;
export const { updateWeather, updateHistory } = weatherSlice.actions;
