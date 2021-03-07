import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./AddSubscription.css";
import { useDispatch, useSelector } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import { periods } from "@constants";
import { validationSchemaSubscriptionForm } from "@helpers/validators";
import { addSubscription } from "@actions";
import { SubscriptionForm } from "@components/SubscriptionForm";

export function AddSubscription() {
  const dispatch = useDispatch();
  const history = useHistory();

  const subscriptionTypes = useSelector(
    (state) => state.subscriptions.subscription_types
  );

  const handleAddSubscription = useCallback(
    ({ name, startDate, period, price, dueDate, appType }) => {
      dispatch(
        addSubscription({ name, startDate, period, price, dueDate, appType })
      );
      history.push("/subscriptions");
    },
    [dispatch, history]
  );
  const handleLoadSubscriptions = () => {
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    history.push("/subscriptions");
  };

  return (
    <div className="add-subscription">
      <div className="add-subscription__title subscription__title">
        <LeftOutlined
          onClick={handleLoadSubscriptions}
          className="add-subscription__icons"
        />
        <div className="add-subscription__text subscription__text">
          Add Subscription
        </div>
      </div>
      <div className="add-subscription__desc subscription__desc">
        <p className="add-subscription__p subscription__p">
          Enter the details of a service you are subscribed to so we can help
          you track and manage it.
        </p>
        <SubscriptionForm
          onSubmitForm={handleAddSubscription}
          validationSchema={validationSchemaSubscriptionForm}
          subscriptionTypes={subscriptionTypes}
          periods={periods}
        />
      </div>
    </div>
  );
}
