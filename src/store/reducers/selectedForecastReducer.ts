import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ForecastData } from "@/types/weather";

interface SelectedForecastState {
  forecastData: ForecastData | null;
}

const initialState: SelectedForecastState = {
  forecastData: null,
};

const selectedForecastSlice = createSlice({
  name: "selectedForecast",
  initialState,
  reducers: {
    setSelectedForecastData: (state, action: PayloadAction<ForecastData>) => {
      state.forecastData = action.payload;
    },
  },
});

export const { setSelectedForecastData } = selectedForecastSlice.actions;
export default selectedForecastSlice.reducer;
