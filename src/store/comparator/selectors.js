import { createSelector } from "@reduxjs/toolkit";
import { MAX_TO_COMPARE } from ".";

export const selectCountryCodesToCompare = (state) =>
  state.comparator.toCompare;

export const selectOverlayState = createSelector(
  selectCountryCodesToCompare,
  (toCompare) => (toCompare.length < MAX_TO_COMPARE ? false : true)
);
