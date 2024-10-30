import { createSelector } from "@reduxjs/toolkit";

const selectStore = state => state.weather;

export const selectWeather = createSelector(
    selectStore,
    state => state.weather,
);

export const selectHistory = createSelector(
    selectStore,
    state => state.history,
);
