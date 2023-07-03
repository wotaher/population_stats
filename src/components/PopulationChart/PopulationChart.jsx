/* eslint-disable react/prop-types */
import "zingchart/es6";
import ZingChart from "zingchart-react";
import { useMemo } from "react";
import { useCountriesByCode } from "../../store/countries/hooks";

export const PopulationChart = ({ countryCodes }) => {
  const countries = useCountriesByCode(countryCodes);

  const chartConfig = useMemo(() => getChartConfig(countries), [countries]);

  return (
    <div>
      <ZingChart {...chartConfig}></ZingChart>
    </div>
  );
};

const getChartConfig = (countries) => {
  const populations = Object.keys(countries).map(
    (countryCode) =>
      countries[countryCode].stats.find((stat) => stat.year === 2022).population
  );

  return {
    data: {
      type: "line",
      plotarea: {
        margin: "dynamic 45 60 dynamic",
      },
      legend: {
        layout: "float",
        "background-color": "none",
        "border-width": 0,
        shadow: 0,
        align: "center",
        "adjust-layout": true,
        "toggle-action": "remove",
        item: {
          padding: 7,
          marginRight: 17,
          cursor: "hand",
        },
      },
      "scale-x": {
        "min-value": 1960,
        "max-value": 2022,
        shadow: 0,
        step: 1,
        label: {
          visible: false,
        },
        "minor-ticks": 0,
      },
      "scale-y": {
        "line-color": "#f6f7f8",
        "max-value": getMaxYAxisValue(populations),
        shadow: 0,
        guide: {
          "line-style": "dashed",
        },
        label: {
          text: "Population",
        },
        "minor-ticks": 0,
        "thousands-separator": ",",
      },
      "crosshair-x": {
        "line-color": "#efefef",
        "plot-label": {
          "border-radius": "5px",
          "border-width": "1px",
          "border-color": "#f6f7f8",
          padding: "10px",
          "font-weight": "bold",
        },
        "scale-label": {
          "font-color": "#000",
          "background-color": "#f6f7f8",
          "border-radius": "5px",
        },
      },
      tooltip: {
        visible: false,
      },
      plot: {
        highlight: true,
        shadow: 0,
        "line-width": "2px",
        marker: {
          type: "circle",
          size: 4,
        },
        "highlight-state": {
          "line-width": 2,
        },
        animation: {
          effect: 1,
          sequence: 2,
          speed: 80,
        },
      },
      series: [
        ...Object.keys(countries).map((key) => {
          const country = countries[key];
          return {
            values: country.stats.map((stat) => stat.population),
            text: country.countryName,
          };
        }),
      ],
    },
  };
};

function getMaxYAxisValue(populations) {
  const maxPopulation = Math.max(...populations);
  const maxAxisValue = Math.ceil(maxPopulation / 1000000) * 1000000 + 1000000;

  return maxAxisValue;
}
