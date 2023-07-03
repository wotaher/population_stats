/* eslint-disable react/prop-types */
import { Card } from "../Card/Card";
import { HumanPictogram } from "../HumanPictogram/HumanPictogram";
import "./styles.css";
import { useSelector } from "react-redux";
import { selectCountriesByCode } from "../../store/countries/selectors";
import { selectCountryCodesToCompare } from "../../store/comparator/selectors";

const PICTOGRAM_SIZE = 100000;

export const PictogramComparator = () => {
  const { countries, countryCodes } = usePictogramComparator();

  return (
    <div className="pictogramComparator">
      {countryCodes.map((key) => {
        const countryData = countries[key];

        const population = countryData.stats.find(
          (stat) => stat.year === 2022
        ).population;

        const pictogramsCount = population / PICTOGRAM_SIZE;

        const lastPictogramLength = Number(
          (pictogramsCount - Math.floor(pictogramsCount)).toFixed(1)
        );

        const shouldRenderLastPictogramPartialy = lastPictogramLength >= 0.4;

        let pictogramsToRender = Math.floor(pictogramsCount);
        if (shouldRenderLastPictogramPartialy) pictogramsToRender += 1;

        return (
          <Card key={key}>
            <div className="legend">
              <HumanPictogram count={1} />
              &nbsp;
              <span>{`= ${PICTOGRAM_SIZE.toLocaleString()} people`}</span>
            </div>
            <HumanPictogram
              count={pictogramsToRender}
              lastWidthPercent={
                shouldRenderLastPictogramPartialy
                  ? lastPictogramLength
                  : undefined
              }
            />
          </Card>
        );
      })}
    </div>
  );
};

const usePictogramComparator = () => {
  const countryCodes = useSelector(selectCountryCodesToCompare);
  const countries = useSelector(selectCountriesByCode(countryCodes));

  return {
    countryCodes,
    countries,
  };
};
