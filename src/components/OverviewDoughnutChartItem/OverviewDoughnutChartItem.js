import React from "react";
import "./OverviewDoughnutChartItem.css";
import { UiOverviewDoughnutChart } from "@components/ui/UiOverviewDoughnutChart";
import { OverviewApplicationTypes } from "@components/OverviewApplicationTypes";
import { typesSetting } from "@settings/settingsBarChart";
export function OverviewDoughnutChartItem(props) {
  const category = Object.values(props.months);

  return (
    <div className="overview-doughnut__container">
      {category.map((item) => {
        return (
          <div className="overview-doughnut__item" key={Math.random()}>
            <div className="overview-doughnut__title">
              <h1 className="subscription__text">{item.month}</h1>
              <h1 className="subscription__text">{`$${
                item.total === null ? 0 : item.total
              }`}</h1>
            </div>
            <div className="overview-doughnut__info">
              <UiOverviewDoughnutChart
                className="doughnut-chart__open"
                settings={typesSetting(item.categories)}
              />
              <OverviewApplicationTypes types={item.categories} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
