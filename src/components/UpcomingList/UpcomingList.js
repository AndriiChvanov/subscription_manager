import React from "react";
import "./UpcomingList.css";
import { DaysLeftCounter } from "@components/DaysLeftCounter";

export function UpcomingList(props) {
  return (
    <div className="upcoming-list">
      <DaysLeftCounter subscriptions={props.subscriptions} />
    </div>
  );
}
