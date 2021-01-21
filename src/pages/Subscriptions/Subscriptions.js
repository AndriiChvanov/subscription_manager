import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { UiContainer } from "@components/ui/UiContainer";
import { AddIcon } from "@icons/addIcon";
import { UiTitle, UiText } from "@components/ui/UiTextDecoration";
import { UpcomingList } from "@components/UpcomingList";
import { UiDisplay } from "@components/ui/UiDisplay";
import { SubscriptionList } from "@components/SubscriptionList";
import { useSelector, useDispatch } from "react-redux";
import "./Subscriptions.css";

export function Subscriptions() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allSubscriptions = useSelector(
    (state) => state.subscriptions.subscriptions_all
  );

  const handleAddSubscription = useCallback(() => {
    dispatch({ type: "LOAD_SUBSCRIPTION_TYPES" });
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    history.push("/add-subscription");
  }, [dispatch, history]);

  useEffect(() => {
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    dispatch({ type: "LOAD_SUBSCRIPTION_TYPES" });
  }, [dispatch, history]);

  return (
    <div className="subscriptions">
      <UiContainer className="subscription__container">
        <div className="subscription__title">
          <UiTitle>Subscription</UiTitle>
          <AddIcon onClick={handleAddSubscription} />
        </div>
        <div className="subscriptions__desc">
          <UiText>Upcoming</UiText>
        </div>
        <UiDisplay>
          <div className="subscriptions__slider">
            {allSubscriptions.length ? (
              <UpcomingList subscriptions={allSubscriptions} />
            ) : (
              <div>You don't have subscriptions</div>
            )}
          </div>
        </UiDisplay>
      </UiContainer>
      <UiContainer>
        <div className="subscription__content">
          <UiTitle>All Subscriptions</UiTitle>
        </div>
        <div className="subscription__items">
          {allSubscriptions.length ? (
            <SubscriptionList subscriptions={allSubscriptions} />
          ) : (
            <div>You don't have subscriptions</div>
          )}
        </div>
      </UiContainer>
    </div>
  );
}
