import React from "react";
import "./UiField.css";

export function UiField(props) {
  return (
    <div className="ui-field" {...props}>
      {props.children}
    </div>
  );
}
