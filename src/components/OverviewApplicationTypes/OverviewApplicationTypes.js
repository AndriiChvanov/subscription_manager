import React from "react";
import "./OverviewApplicationTypes.css";

export function OverviewApplicationTypes(props) {
  const { types } = props;
  const typesColor = (type) => {
    const typeToLowerCase = type === undefined ? " " : type.toLowerCase();

    switch (typeToLowerCase) {
      case "entertainment":
        return "entertainment";
      case "productivity":
        return "productivity";
      case "social":
        return "social";
      case "health":
        return "health";
      case "others":
        return "others";
    }
  };
  const typesFilters = Object.values(types);
  return (
    <div className="overview-application__types">
      {typesFilters.map((type) => {
        return (
          <div className="overview-application__item" key={Math.random()}>
            <div
              className={`overview-application__round ${typesColor(type.name)}`}
            ></div>
            <div className="overview-application__type overview__app-text ">
              {type.name}
            </div>
            <div className="overview-application__sum overview__app-text ">
              {type.total === null ? "$0" : `$${type.total}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
