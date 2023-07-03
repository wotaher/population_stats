/* eslint-disable react/prop-types */
import { useCountriesByCode } from "../../store/countries/hooks";
import { HumanPictogram } from "../HumanPictogram/HumanPictogram";

const PICTOGRAM_SIZE = 100000;

export const PictogramComparator = ({ countryCodes }) => {
  const countries = useCountriesByCode(countryCodes);

  return (
    <div>
      {Object.keys(countries).map((key) => {
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
          <HumanPictogram
            key={key}
            count={pictogramsToRender}
            lastWidthPercent={
              shouldRenderLastPictogramPartialy
                ? lastPictogramLength
                : undefined
            }
          />
        );
      })}
    </div>
  );
};
