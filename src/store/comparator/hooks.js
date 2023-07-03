import { useSelector } from "react-redux";
import { selectOverlayState } from "./selectors";

export const useOverlay = () => {
  return useSelector(selectOverlayState);
};
