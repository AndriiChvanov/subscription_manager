import React from "react";
import "./UpComingProgressbar.css";
import { CircularProgressbar } from "react-circular-progressbar";

export function UpComingProgressbar(props) {
  return (
    <>
      <div className="upcoming-progressbar text-font">
        <CircularProgressbar
          maxValue={30}
          counterClockwise={true}
          strokeWidth={12}
          circleRatio={1}
          {...props}
        />
      </div>
      <div className="upcoming-progressbar__text">days left</div>
    </>
  );
}
