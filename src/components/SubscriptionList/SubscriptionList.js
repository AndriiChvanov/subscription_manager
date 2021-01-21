import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSubscription } from "@actions";
import { SubscriptionItem } from "@components/SubscriptionItem";
import "./SubscriptionList.css";

export function SubscriptionList(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGetId = useCallback(
    (id) => {
      dispatch(loadSubscription(id));
      history.push("/subscription-info");
    },
    [dispatch, history]
  );
  useEffect(
    (id) => {
      dispatch(loadSubscription(id));
    },
    [handleGetId]
  );

  return (
    <div className="subscription-list">
      {props.subscriptions.map((subscription) => (
        <SubscriptionItem
          key={subscription.id}
          handlerClick={() => handleGetId(subscription.id)}
          subscriptions={subscription}
        />
      ))}
    </div>
  );
}
