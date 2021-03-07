import React from "react";
import "./UiProfileLogo.css";
import profileLogo from "@icons/profileLogo.png";

export function UiProfileLogo(props) {
  const logoSize = (size) => {
    if (size === "small") {
      return "ui-profileLogo__small";
    }
    if (size === "medium") {
      return "ui-profileLogo__medium";
    }
    if (size === "large") {
      return "ui-profileLogo__large";
    }
  };
  return (
    <div className="ui-profileLogo">
      {props.icon ? (
        <img src={props.icon} className={logoSize(props.size)} alt="name" />
      ) : (
        <img
          src={props.logo === undefined ? profileLogo : props.logo}
          className={logoSize(props.size)}
          alt="name"
        />
      )}
    </div>
  );
}
