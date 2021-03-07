import React from "react";
import "./UiLogo.css";

export function UiLogo(props) {
  const logoSize = (size) => {
    if (size === "small") {
      return "ui-logo__small h6__small";
    }
    if (size === "medium") {
      return "ui-logo__medium h6__medium";
    }
    if (size === "large") {
      return "ui-logo__large h6__large";
    }
  };
  const nameLetter = (letter) => {
    const firstLetter = letter.charAt(0).toUpperCase();
    const secondLetter = letter.charAt(1).toUpperCase();
    return firstLetter + secondLetter;
  };

  return (
    <div className="ui-logo">
      {props.icon ? (
        <img src={props.icon} className={logoSize(props.size)} alt="name" />
      ) : (
        <h6 className={logoSize(props.size)}>
          {props.name ? nameLetter(props.name) : " "}
        </h6>
      )}
    </div>
  );
}
