import { WorldMap } from "../WorldMap/WorldMap";
import { useSelector, useDispatch } from "react-redux";
import { DetailsCompare } from "../DetailsCompare/DetailsCompare";
import { selectCountryCodesToCompare } from "../../store/comparator/selectors";
import {
  clearCompare,
  addToCompare,
  removeFromCompare,
} from "../../store/comparator";

export const ComparatorWrapper = () => {
  return (
    <div>
      <DetailsCompare></DetailsCompare>
    </div>
  );
};
