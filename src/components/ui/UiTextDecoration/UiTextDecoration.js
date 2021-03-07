import React from "react";
import "./UiTextDecoration.css";

export function UiTitle(props) {
  return (
    <div className="ui-title text-font" {...props}>
      {props.children}
    </div>
  );
}
export function UiText(props) {
  return (
    <div className="ui-text text-font" {...props}>
      {props.children}
    </div>
  );
}
export function UiProfileFormTitle(props) {
  return (
    <div className="ui-profile-title text-font" {...props}>
      {props.children}
    </div>
  );
}
export function UiProfileFormText(props) {
  return (
    <div className="ui-profile-text text-font" {...props}>
      {props.children}
    </div>
  );
}
