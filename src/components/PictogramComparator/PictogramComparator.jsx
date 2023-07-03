/* eslint-disable react/prop-types */
import { useCountriesByCode } from "../../store/countries/hooks";
import { Card } from "../Card/Card";
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
          <Card key={key}>
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

// const usePictogramComparator = (countryCodes) => {
//   const countries = useCountriesByCode(countryCodes);
// };
