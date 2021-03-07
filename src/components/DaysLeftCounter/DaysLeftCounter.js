import React from "react";
import "./DaysLeftCounter.css";
import "react-circular-progressbar/dist/styles.css";
import { UiSlider } from "@components/ui/UiSlider";
import { UpcomingItem } from "@components/UpcomingItem";
import { daysFormat } from "@helpers/dateTimeFormated";

export function DaysLeftCounter(props) {
  const upComingItemsFilter = (id, day, subscription) => {
    daysFormat(day);
    if (daysFormat(day) > 0 && daysFormat(day) < 30) {
      return (
        <UpcomingItem
          key={id}
          subscription={subscription}
          day={daysFormat(day)}
        />
      );
    }
  };
  return (
    <UiSlider>
      {props.subscriptions.map((subscription) =>
        upComingItemsFilter(
          subscription.id,
          subscription.nextPaymentDate,
          subscription
        )
      )}
    </UiSlider>
  );
}
