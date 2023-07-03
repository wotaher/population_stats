import { WorldMap } from "../WorldMap/WorldMap";
import { useState } from "react";
import { Comparator } from "../Comparator/Comparator";

export const ComparatorWrapper = () => {
  const { addToCompare: onCountryClick, toCompare } = useComparatorWrapper();

  return (
    <div>
      <WorldMap onCountryClick={onCountryClick}></WorldMap>
      {/* <Comparator countryCodes={toCompare}></Comparator> */}
    </div>
  );
};

const MAX_TO_COMPARE = 2;

const useComparatorWrapper = () => {
  const [toCompare, setToCompare] = useState([]);

  const clearCompare = (addAtTheEnd) => {
    setToCompare(addAtTheEnd ? [addAtTheEnd] : []);
  };

  const removeFromCompare = (countryCode) => {
    setToCompare([...toCompare.filter((code) => code !== countryCode)]);
  };

  const addToCompare = (country) => {
    const countryCode = country.shapeid;

    // TODO refactor this shit
    if (toCompare.includes(countryCode)) {
      removeFromCompare(countryCode);
    } else {
      if (toCompare.length >= MAX_TO_COMPARE) {
        clearCompare(countryCode);
      } else {
        setToCompare([...toCompare, countryCode]);
      }
    }
  };

  return { toCompare, addToCompare, removeFromCompare };
};
