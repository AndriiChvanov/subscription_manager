import React from "react";
import "./UiOverviewDoughnutChart.css";
import { Doughnut } from "react-chartjs-2";
import {
  chartDoughnutData,
  chartDoughnutOption,
} from "@settings/settingsBarChart";

export function UiOverviewDoughnutChart(props) {
  const { settings } = props;
  const data = chartDoughnutData(
    settings.label,
    settings.total,
    settings.color
  );
  return (
    <div {...props}>
      <Doughnut data={data} options={chartDoughnutOption} />
    </div>
  );
}
