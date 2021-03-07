import React from "react";
import "./OverviewChartOpen.css";
import { UiOverviewBarChart } from "@components/ui/UiOverviewBarChart";
import { changeMonthToShort } from "@helpers/dateTimeFormated";
import { OverviewDoughnutChartItem } from "@components/OverviewDoughnutChartItem";
import { chartBarOpenOption } from "@settings/settingsBarChart";

export function OverviewChartOpen(props) {
  const { months } = props;
  const changeMonth = Object.keys(months).map((month) =>
    changeMonthToShort(month)
  );
  const totalPayMonth = Object.values(months).map((category) => {
    return category.total;
  });
  const barLabels = [...changeMonth, "DEC", "OCT", "DEC", "OCT"];
  const barValues = [...totalPayMonth, 0, 0, 0, 0];
  const doughnutLabels = [
    "Entertainment",
    "Productivity",
    "Social",
    "Health",
    "Others",
  ];

  return (
    <div className="overview-chart__open">
      <UiOverviewBarChart
        className="bar-chart__open"
        options={chartBarOpenOption}
        months={props.months}
        labels={barLabels.reverse()}
        values={barValues.reverse()}
        width={400}
        height={200}
      />
      <OverviewDoughnutChartItem months={months} labels={doughnutLabels} />
    </div>
  );
}
