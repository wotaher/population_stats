/* eslint-disable react/prop-types */
import { PopulationChart } from "../PopulationChart/PopulationChart";
import { useSelector } from "react-redux";
import { selectCountryCodesToCompare } from "../../store/comparator/selectors";

export const Comparator = ({ toCompare = [] }) => {
  const { countryCodes } = useComparator(toCompare);

  return (
    <div>
      <PopulationChart countryCodes={countryCodes}></PopulationChart>
    </div>
  );
};

const useComparator = () => {
  const countryCodes = useSelector(selectCountryCodesToCompare);

  return {
    countryCodes,
  };
};
