import { useSelector } from "react-redux";
import { selectCountriesByCode } from "./selectors";

export const useCountriesByCode = () => useSelector(selectCountriesByCode);
