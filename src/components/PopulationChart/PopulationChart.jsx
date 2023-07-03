import "zingchart/es6";
import ZingChart from "zingchart-react";

export const PopulationChart = ({ countries }) => {
  return (
    <div>
      <ZingChart {...prepareCountriesData(countries)}></ZingChart>
    </div>
  );
};

const prepareCountriesData = (countries) => {
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
        "max-value": 2020,
        shadow: 0,
        step: 2,
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
        shadow: 0,
        guide: {
          "line-style": "dashed",
        },
        label: {
          text: "Page Views",
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
        "tooltip-text": "%t views: %v<br>%k",
        shadow: 0,
        "line-width": "2px",
        marker: {
          type: "circle",
          size: 3,
        },
        "highlight-state": {
          "line-width": 3,
        },
        animation: {
          effect: 1,
          sequence: 2,
          speed: 100,
        },
      },
      series: [
        // Object.keys(countries).map(country => ({
        //   values: Object.keys(countries[country]),
        //   text: "USA",
        //   "line-color": "#007790",
        //   "legend-item": {
        //     "background-color": "#007790",
        //     borderRadius: 5,
        //     "font-color": "white",
        //   },
        //   "legend-marker": {
        //     visible: false,
        //   },
        //   marker: {
        //     "background-color": "#007790",
        //     "border-width": 1,
        //     shadow: 0,
        //     "border-color": "#69dbf1",
        //   },
        //   "highlight-marker": {
        //     size: 6,
        //     "background-color": "#007790",
        //   },
        // })),
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
