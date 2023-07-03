import {
  DETAILS_COUNTING_DURATION,
  DETAILS_GAP,
  DETAILS_YEAR,
} from "../../consts";
import "./styles.css";
import { CountingAnimation } from "../CountingAnimation/CountingAnimation";

/* eslint-disable react/prop-types */
export const CountryDetails = ({ country }) => {
  if (!country || !country.countryName) return null;

  const population = country.stats.find(
    (stat) => stat.year === DETAILS_YEAR
  ).population;

  const before = country.stats.find(
    (stat) => stat.year === DETAILS_YEAR - DETAILS_GAP
  ).population;

  return (
    <div className="countryDetails">
      <h1 className="countryName">{country.countryName}</h1>
      <span className="year">({DETAILS_YEAR.toString()})</span>
      <h2>Population</h2>
      <span className="stat">
        <CountingAnimation
          endValue={population}
          format={formatPopulation}
          duration={DETAILS_COUNTING_DURATION}
        ></CountingAnimation>
      </span>
      <h2>Growth in last decade</h2>
      <span className="stat">
        <CountingAnimation
          endValue={population - before}
          format={formatPopulation}
          duration={DETAILS_COUNTING_DURATION}
        ></CountingAnimation>
      </span>
      <h2>Growth speed</h2>
      <span className="stat">
        {calculatePopulationGrowth(before, population)}
        <span className="percent">%</span>
      </span>
    </div>
  );
};

const formatPopulation = (population) => {
  return population.toLocaleString();
};

const calculatePopulationGrowth = (initialPopulation, finalPopulation) => {
  const growth = finalPopulation - initialPopulation;
  const growthPercentage = (growth / initialPopulation) * 100;

  return growthPercentage.toFixed(2);
};
