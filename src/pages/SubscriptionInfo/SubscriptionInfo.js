import React, { useCallback, useEffect } from "react";
import "./SubscriptionInfo.css";
import { useHistory } from "react-router-dom";
import { LeftOutlined, MoreOutlined } from "@ant-design/icons";
import { UiContainer } from "@components/ui/UiContainer";
import { useSelector, useDispatch } from "react-redux";
import { UiLogo } from "@components/ui/UiLogo";

export function SubscriptionInfo() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { name, icon, nextPaymentDate, appType } = useSelector(
    (state) => state.subscriptions.subscription_info
  );

  const handlerEditSubscription = useCallback(() => {
    dispatch({ type: "LOAD_SUBSCRIPTION_TYPES" });
    history.push("/edit-subscription");
  }, [dispatch, history]);

  const handlerLoadSubscription = () => {
    history.push("/subscriptions");
  };

  useEffect(() => {
    dispatch({ type: "LOAD_SUBSCRIPTION_TYPES" });
  }, [dispatch, history]);

  return (
    <div className="subscription-info">
      <div className="subscription-info__btn subscription__title">
        <LeftOutlined
          onClick={handlerLoadSubscription}
          className="subscription-info__icons"
        />
        <MoreOutlined onClick={handlerEditSubscription} />
      </div>
      <div className="subscription-info__info">
        <UiLogo icon={icon} name={name} size="large" />
        <div className="subscription-info__title subscription__text">
          {name}
        </div>
        <div className="subscription-info__type subscription__p">{appType}</div>
        <div className="subscription-info__payment">{nextPaymentDate}</div>
      </div>
      <div className="subscription-info__desc">
        <UiContainer />
      </div>
    </div>
  );
}
