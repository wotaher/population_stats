import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./countries/countriesReducer";
import { comparatorSlice } from "./comparator";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    comparator: comparatorSlice.reducer,
  },
});
