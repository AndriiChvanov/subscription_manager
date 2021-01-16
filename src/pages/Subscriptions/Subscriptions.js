import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { UiContainer } from "@components/ui/UiContainer";
import { AddIcon } from "@icons/addIcon";
import { UiTitle, UiText } from "@components/ui/UiTextDecoration";
import { UiDaysLeft } from "@components/ui/UiDaysLeft";
import { UiDisplay } from "@components/ui/UiDisplay";
import { UiItem } from "@components/ui/UiItem";
import { useSelector, useDispatch } from "react-redux";
import "./Subscriptions.css";

export function Subscriptions() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allSubscription = useSelector((state) => state.subscriptions.sub_all);

  const handelClick = useCallback(() => {
    dispatch({ type: "SUB_TYPES_LOAD" });
    history.push("/add-subscriptions");
  }, [dispatch, history]);

  useEffect(() => {
    dispatch({ type: "SUB_LOAD" });
    dispatch({ type: "SUB_TYPES_LOAD" });
  }, [dispatch, history]);

  return (
    <div className="subscriptions">
      <UiContainer className="subscription__container">
        <div className="subscription__title">
          <UiTitle>Subscription</UiTitle>
          <AddIcon onClick={handelClick} />
        </div>
        <div className="subscriptions__desc">
          <UiText>Upcoming</UiText>
        </div>
        <UiDisplay>
          <div className="subscriptions__slider">
            <UiDaysLeft items={allSubscription} />
          </div>
        </UiDisplay>
      </UiContainer>
      <UiContainer>
        <div className="subscription__content">
          <UiTitle>All Subscription</UiTitle>
        </div>
        <div className="subscription__items">
          <UiItem items={allSubscription}></UiItem>
        </div>
      </UiContainer>
    </div>
  );
}
