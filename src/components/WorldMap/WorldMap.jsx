/* eslint-disable react/prop-types */
import "zingchart/es6";
import ZingChart from "zingchart-react";
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-world-countries.min.js";
import { useMemo } from "react";
import { useCountriesByCode } from "../../store/countries/hooks";
import { getStyledCountries } from "../../store/countries/getStyledCountries";
import { useSelector } from "react-redux";

const getConfig = (countriesByCode, onCountryClick) => {
  const styledItems = getStyledCountries(countriesByCode);

  return {
    id: "myChart",
    data: {
      shapes: [
        {
          type: "zingchart.maps",
          options: {
            name: "world.countries",
            style: {
              items: {
                ...styledItems,
              },
            },
            ignore: ["GRL", "ATF", "ATA"],
          },
        },
      ],
    },
    height: 700,
    width: "100%",
    shape_click: onCountryClick,
  };
};

export const WorldMap = ({ onCountryClick: onCountryClick = () => {} }) => {
  const countriesByCode = useCountriesByCode();

  const config = useMemo(
    () => getConfig(countriesByCode, onCountryClick),
    [onCountryClick, countriesByCode]
  );

  return (
    <div>
      <ZingChart {...config}></ZingChart>
    </div>
  );
};
