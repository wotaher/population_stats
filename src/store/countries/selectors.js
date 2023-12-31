import { createSelector } from "@reduxjs/toolkit";

export const selectCountries = (state) => state.countries;

export const selectCountriesByCode = (codes) =>
  createSelector(selectCountries, (countries) => {
    const keys = Object.keys(countries);

    const acc = {};

    keys.forEach((key) => {
      const countryData = countries[key];

      if (Array.isArray(codes) && !codes.includes(countryData.countryCode))
        return;

      const newKey = countryData.countryCode;

      acc[newKey] = { ...countryData, countryName: key };

      delete acc[newKey].countryCode;
    });
    return acc;
  });
