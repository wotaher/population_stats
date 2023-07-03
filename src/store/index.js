import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./countriesReducer";

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
