import React from "react";
import "./OverviewChartClose.css";
import { UiOverviewBarChart } from "@components/ui/UiOverviewBarChart";
import { UiOverviewDoughnutChart } from "@components/ui/UiOverviewDoughnutChart";
import { changeMonthToShort } from "@helpers/dateTimeFormated";
import { chartBarCloseOption } from "@settings/settingsBarChart";

export function OverviewChartClose(props) {
  const { months } = props;
  const changeMonth = Object.keys(months).map((month) =>
    changeMonthToShort(month)
  );
  const totalPayMonth = Object.values(months).map((category) => {
    return category.total;
  });
  const labelsClose = [...changeMonth, "DEC", "OCT"];
  const valuesClose = [...totalPayMonth, 0, 0];
  const settingsClose = {
    label: ["Entertainment", "Productivity", "Social", "Health", "Others"],
    color: [
      "rgba(169,200,251,1)",
      "rgba(249,160,0,1)",
      "rgba(70,75,98,1)",
      "rgba(41,195,125,1)",
      "rgba(237,0,6,1)",
    ],
    total: [50, 50, 50, 50, 50],
  };
  return (
    <div className="overview-chart__close">
      <UiOverviewDoughnutChart
        settings={settingsClose}
        className="doughnut-chart__close"
      />
      <UiOverviewBarChart
        options={chartBarCloseOption}
        className="bar-chart__close"
        months={props.months}
        labels={labelsClose.reverse()}
        values={valuesClose.reverse()}
        width={400}
        height={200}
      />
    </div>
  );
}
