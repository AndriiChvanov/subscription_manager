import React from "react";
import "./UiDisplay.css";

export function UiDisplay(props) {
  return (
    <div className="ui-display" {...props}>
      {props.children}
    </div>
  );
}
