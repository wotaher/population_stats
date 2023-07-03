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
      utc: true,
      title: {
        text: "Population",
        "font-size": "24px",
        "adjust-layout": true,
      },
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
        // transform: {
        //   type: "date",
        //   all: "%D, %d %M<br />%h:%i %A",
        //   item: {
        //     visible: false,
        //   },
        // },
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
        // {
        //   values: [
        //     714.6, 656.3, 660.6, 729.8, 731.6, 682.3, 654.6, 673.5, 700.6,
        //     755.2, 817.8, 809.1, 815.2, 836.6, 897.3, 896.9, 866.5, 835.8,
        //     797.9, 784.7, 802.8, 749.3, 722.1, 688.1, 730.4, 661.5, 609.7,
        //     630.2, 633, 604.2, 558.1, 581.4, 511.5, 556.5, 542.1, 599.7, 664.8,
        //     725.3, 694.2, 690.5,
        //   ],
        //   text: "Documentation",
        //   "line-color": "#009872",
        //   "legend-item": {
        //     "background-color": "#009872",
        //     borderRadius: 5,
        //     "font-color": "white",
        //   },
        //   "legend-marker": {
        //     visible: false,
        //   },
        //   marker: {
        //     "background-color": "#009872",
        //     "border-width": 1,
        //     shadow: 0,
        //     "border-color": "#69f2d0",
        //   },
        //   "highlight-marker": {
        //     size: 6,
        //     "background-color": "#009872",
        //   },
        // },
        // {
        //   values: [
        //     536.9, 576.4, 639.3, 669.4, 708.7, 691.5, 681.7, 673, 701.8, 636.4,
        //     637.8, 640.5, 653.1, 613.7, 583.4, 538, 506.7, 563.1, 541.4, 489.3,
        //     434.7, 442.1, 482.3, 495.4, 556.1, 505.4, 463.8, 434.7, 377.4,
        //     325.4, 351.7, 343.5, 333.2, 332, 378.9, 415.4, 385, 412.6, 445.9,
        //     441.5,
        //   ],
        //   text: "Support",
        //   "line-color": "#da534d",
        //   "legend-item": {
        //     "background-color": "#da534d",
        //     borderRadius: 5,
        //     "font-color": "white",
        //   },
        //   "legend-marker": {
        //     visible: false,
        //   },
        //   marker: {
        //     "background-color": "#da534d",
        //     "border-width": 1,
        //     shadow: 0,
        //     "border-color": "#faa39f",
        //   },
        //   "highlight-marker": {
        //     size: 6,
        //     "background-color": "#da534d",
        //   },
        // },
      ],
    },
  };
};

function getMaxYAxisValue(populations) {
  console.log(populations);
  const maxPopulation = Math.max(...populations);
  const maxAxisValue = Math.ceil(maxPopulation / 1000000) * 1000000 + 1000000;

  return maxAxisValue;
}
