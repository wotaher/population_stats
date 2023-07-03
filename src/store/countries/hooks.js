import { useSelector } from "react-redux";
import { selectCountriesByCode } from "./selectors";

export const useCountriesByCode = (codes) =>
  useSelector(selectCountriesByCode(codes));
