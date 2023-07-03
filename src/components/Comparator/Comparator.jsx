/* eslint-disable react/prop-types */
import { useMemo } from "react";

import { PopulationChart } from "../PopulationChart/PopulationChart";

const getDataByCode = (param) => ({});

export const Comparator = ({ countryCodes = [] }) => {
  const { countries } = useComparator(countryCodes);
  console.log(countries);
  return (
    <div>
      {/* You choosed to compare: <strong>countryCodes[0]</strong> <strong>countryCodes[1]</strong> */}
      <PopulationChart></PopulationChart>
    </div>
  );
};

const useComparator = (countryCodes) => {
  const countries = useMemo(
    () =>
      countryCodes && countryCodes.length ? getDataByCode(countryCodes) : {},
    [countryCodes]
  ); // TODO refactor this, data is fetched too many times

  return {
    countries,
  };
};
