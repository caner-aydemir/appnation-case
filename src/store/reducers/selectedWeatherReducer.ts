import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "@/types/weather";

interface SelectedWeatherState {
  weatherData: WeatherData | null;
}

const initialState: SelectedWeatherState = {
  weatherData: null,
};

const selectedWeatherSlice = createSlice({
  name: "selectedWeather",
  initialState,
  reducers: {
    setSelectedWeatherData: (state, action: PayloadAction<WeatherData>) => {
      state.weatherData = action.payload;
    },
  },
});

export const { setSelectedWeatherData } = selectedWeatherSlice.actions;
export default selectedWeatherSlice.reducer;
