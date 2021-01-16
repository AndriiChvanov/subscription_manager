import React, { useCallback, useEffect } from "react";
import "./SubscriptionInfo.css";
import { useHistory } from "react-router-dom";
import { LeftOutlined, MoreOutlined } from "@ant-design/icons";
import { UiContainer } from "@components/ui/UiContainer";
import { useSelector, useDispatch } from "react-redux";
import netflix from "@icons/NetflixInf.png";

export function SubscriptionInfo() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { name, nextPaymentDate, appType } = useSelector(
    (state) => state.subscriptions.sub_info
  );

  const handlerUpdate = useCallback(() => {
    dispatch({ type: "SUB_TYPES_LOAD" });
    history.push("/upd-subscriptions");
  }, [dispatch, history]);

  const handlerSubscr = () => {
    history.push("/subscriptions");
  };

  useEffect(() => {
    dispatch({ type: "SUB_TYPES_LOAD" });
  }, [dispatch, history]);

  return (
    <div className="subscription-info">
      <div className="subscription-info__btn subc__title">
        <LeftOutlined
          onClick={handlerSubscr}
          className="subscription-info__icons"
        />
        <MoreOutlined onClick={handlerUpdate} />
      </div>
      <div className="subscription-info__info">
        <img src={netflix} alt="logo" />
        <div className="subscription-info__title subc__text">{name}</div>
        <div className="subscription-info__type subc__p">{appType}</div>
        <div className="subscription-info__payment">{nextPaymentDate}</div>
      </div>
      <div className="subscription-info__desc">
        <UiContainer></UiContainer>
      </div>
    </div>
  );
}
