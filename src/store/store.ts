import { configureStore } from "@reduxjs/toolkit";
import selectedWeatherReducer from "./reducers/selectedWeatherReducer";
import selectedForecastReducer from "./reducers/selectedForecastReducer";
import searchHistoryReducer from "./reducers/searchHistoryReducer";

export const store = configureStore({
  reducer: {
    selectedWeather: selectedWeatherReducer,
    selectedForecast: selectedForecastReducer,
    searchHistory: searchHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
