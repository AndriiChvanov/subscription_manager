import React, { useCallback } from "react";
import "./UpcomingItem.css";
import { buildStyles } from "react-circular-progressbar";
import { UiLogo } from "@components/ui/UiLogo";
import { UpComingProgressbar } from "@components/UpComingProgressbar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSubscription } from "@actions";
import { defaultStyleCircleBar, circleColor } from "@settings/defaultStyles";

export function UpcomingItem(props) {
  const { id, price, name, type, icon } = props.subscription;
  const { day } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGetId = useCallback(
    (id) => {
      dispatch(loadSubscription(id));
      history.push("/subscription-info");
    },
    [dispatch, history]
  );

  return (
    <div className="upcoming-item" key={id} onClick={() => handleGetId(id)}>
      <div className="upcoming-item__container">
        <div className="upcoming-item__info text-font">
          <UiLogo icon={icon} name={name} size="small" />
          <div className="upcoming-item__price text-font">{`$${price}`}</div>
        </div>
        <div className="upcoming-item__name text-font">{name}</div>
        <div className="upcoming-item__type text-type">{type}</div>
        <div className="upcoming-item__info text-font">
          <UpComingProgressbar
            value={day}
            text={day}
            styles={buildStyles({
              ...defaultStyleCircleBar,
              pathColor: circleColor(day),
            })}
          />
        </div>
      </div>
    </div>
  );
}
