import { createSlice } from "@reduxjs/toolkit";

const MAX_TO_COMPARE = 2;

// Define the initial state
const initialState = {
  toCompare: [],
};

// Define the slice
export const comparatorSlice = createSlice({
  name: "comparator",
  initialState,
  reducers: {
    clearCompare: (state, action) => {
      if (action.payload) {
        state.toCompare = [action.payload];
      } else {
        state.toCompare = [];
      }
    },
    removeFromCompare: (state, action) => {
      state.toCompare = state.toCompare.filter(
        (code) => code !== action.payload
      );
    },
    addToCompare: (state, action) => {
      const countryCode = action.payload;

      if (state.toCompare.includes(countryCode)) {
        state.toCompare = state.toCompare.filter(
          (code) => code !== countryCode
        );
      } else {
        if (state.toCompare.length >= MAX_TO_COMPARE) {
          state.toCompare = [countryCode];
        } else {
          state.toCompare = [...state.toCompare, countryCode];
        }
      }
    },
  },
});

export const { clearCompare, removeFromCompare, addToCompare } =
  comparatorSlice.actions;
