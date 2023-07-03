import { WorldMap } from "../WorldMap/WorldMap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Comparator } from "../Comparator/Comparator";
import { selectCountryCodesToCompare } from "../../store/comparator/selectors";
import {
  clearCompare,
  addToCompare,
  removeFromCompare,
} from "../../store/comparator";

export const ComparatorWrapper = () => {
  const { handleAddToCompare, toCompare } = useComparatorWrapper();
  console.log(toCompare);

  const onCountryClick = (ev) => {
    handleAddToCompare(ev.shapeid);
  };

  return (
    <div>
      <WorldMap onCountryClick={onCountryClick}></WorldMap>
      {/* <Comparator countryCodes={toCompare}></Comparator> */}
    </div>
  );
};

const useComparatorWrapper = () => {
  const toCompare = useSelector(selectCountryCodesToCompare);
  const dispatch = useDispatch();

  const handleClearCompare = (addAtTheEnd) => {
    dispatch(clearCompare(addAtTheEnd));
  };

  const handleRemoveFromCompare = (countryCode) => {
    dispatch(removeFromCompare(countryCode));
  };

  const handleAddToCompare = (country) => {
    dispatch(addToCompare(country));
  };

  return {
    toCompare,
    handleAddToCompare,
    handleRemoveFromCompare,
    handleClearCompare,
  };
};
