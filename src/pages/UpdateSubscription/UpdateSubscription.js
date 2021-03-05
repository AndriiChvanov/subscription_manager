import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./UpdateSubscription.css";
import { useDispatch, useSelector } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import { editSubscription } from "@actions";
import { SubscriptionForm } from "@components/SubscriptionForm";
import { periods } from "@constants";
import { validationSchemaSubscriptionForm } from "@helpers/validators";

export function UpdateSubscription() {
  const dispatch = useDispatch();
  const history = useHistory();

  const subscriptionTypes = useSelector(
    (state) => state.subscriptions.subscription_types
  );
  const { id, name, startDate, period, price, dueDate, appType } = useSelector(
    (state) => state.subscriptions.subscription_info
  );

  const handleEditSubscription = useCallback(
    ({ name, startDate, period, price, dueDate, appType }) => {
      dispatch(
        editSubscription({
          name,
          startDate,
          period,
          price,
          dueDate,
          id: id,
          appType,
        })
      );
      dispatch({ type: "UPDATE_SUBSCRIPTION" });
      dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
      history.push("/subscriptions");
    },
    [dispatch, history, id]
  );

  const handleLoadSubscriptions = () => {
    dispatch({ type: "LOAD_SUBSCRIPTION" });
    history.push("/subscriptions");
  };

  return (
    <div className="update-subscriptions">
      <div className="update-subscription__title subscription__title">
        <LeftOutlined
          onClick={handleLoadSubscriptions}
          className="update-subscription__icons"
        />
        <div className="update-subscription__text subscription__text">
          Update Subscription
        </div>
      </div>
      <div className="update-subscriptions__desc subscription__desc">
        <p className="update-subscription__p subscription__p">
          Enter the details of a service you are subscribed to so we can help
          you track and manage it.
        </p>
        <SubscriptionForm
          name={name}
          startDate={startDate}
          price={price}
          dueDate={dueDate}
          appType={appType}
          validationSchema={validationSchemaSubscriptionForm}
          onSubmitForm={handleEditSubscription}
          subscriptionTypes={subscriptionTypes}
          period={period}
          periods={periods}
        />
      </div>
    </div>
  );
}
