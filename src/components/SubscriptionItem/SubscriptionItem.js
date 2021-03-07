import React from "react";
import { dateFormated } from "@helpers/dateTimeFormated";
import { UiLogo } from "@components/ui/UiLogo";
import "./SubscriptionItem.css";

export function SubscriptionItem(props) {
  const { id, name, price, nextPaymentDate, icon } = props.subscriptions;

  return (
    <div className="subscription-item">
      <div
        className="subscription-item__container"
        onClick={() => props.handlerClick(id)}
      >
        <UiLogo icon={icon} name={name} size="medium" />
        <div className="subscription-item__info">
          <div className="subscription-item__name text-font">{name}</div>
          <div className="subscription-item__date text-type">
            {dateFormated(nextPaymentDate)}
          </div>
        </div>
        <div className="subscription-item__price text-font">{`$${price}`}</div>
      </div>
      <div className="subscription-item__border" />
    </div>
  );
}
