import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchHistoryState {
  history: string[];
}

const initialState: SearchHistoryState = {
  history: [],
};

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.history.includes(action.payload)) {
        state.history = [action.payload, ...state.history.slice(0, 4)];
        localStorage.setItem("searchHistory", JSON.stringify(state.history));
      }
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter((city) => city !== action.payload);
      localStorage.setItem("searchHistory", JSON.stringify(state.history));
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem("searchHistory");
    },
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
  },
});

export const { addToHistory, clearHistory, removeCity, setHistory } =
  searchHistorySlice.actions;
export default searchHistorySlice.reducer;
