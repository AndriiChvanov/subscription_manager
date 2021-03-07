import React from "react";
import "./UiOverviewBarChart.css";
import { Bar as BarChart } from "react-chartjs-2";
import { chartBarData } from "@settings/settingsBarChart";
import "@settings/rectangleBarChart";

export function UiOverviewBarChart(props) {
  const colors = [
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
  ];
  const hoverColors = [
    "rgba(40, 121, 254, 01)",
    "rgba(40, 121, 254, 01)",
    "rgba(40, 121, 254, 01)",
    "rgba(40, 121, 254, 01)",
    "rgba(194, 217, 255, 1)",
    "rgba(194, 217, 255, 1)",
  ];

  const data = chartBarData(props.labels, props.values, colors, hoverColors);

  return (
    <div {...props}>
      <BarChart
        type="bar"
        data={data}
        options={props.options}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
