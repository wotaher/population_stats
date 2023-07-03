/* eslint-disable react/prop-types */
import { PopulationChart } from "../PopulationChart/PopulationChart";
import { useSelector } from "react-redux";
import { selectCountryCodesToCompare } from "../../store/comparator/selectors";
import { PictogramComparator } from "../PictogramComparator/PictogramComparator";
import { Card } from "../Card/Card";
import { CountryDetails } from "../CountryDetails/CountryDetails";
import "./styles.css";
import { selectCountriesByCode } from "../../store/countries/selectors";

export const DetailsCompare = ({ toCompare = [] }) => {
  const { countryCodes, countries } = useComparator(toCompare);
  console.log(countries, countryCodes);
  return (
    <div className="details">
      <div className="columns">
        <Card>
          <CountryDetails country={countries[countryCodes[0]]}></CountryDetails>
        </Card>
        <Card>
          <CountryDetails country={countries[countryCodes[1]]}></CountryDetails>
        </Card>
      </div>
      <Card>
        <PopulationChart countryCodes={countryCodes}></PopulationChart>
      </Card>
      <Card>
        <PictogramComparator countryCodes={countryCodes}></PictogramComparator>
      </Card>
      <Card></Card>
    </div>
  );
};

const useComparator = () => {
  const countryCodes = useSelector(selectCountryCodesToCompare);
  const countries = useSelector(selectCountriesByCode(countryCodes));

  return {
    countryCodes,
    countries,
  };
};
