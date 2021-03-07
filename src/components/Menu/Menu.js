import React, { useCallback } from "react";
import "./Menu.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ButtonHome } from "@icons/buttonHome";
import { ButtonSubscriptions } from "@icons/buttonSubscriptions";
import { ButtonPayments } from "@icons/buttonPayments";
import { ButtonSettings } from "@icons/buttonSettings";

export function Menu(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGetOverview = () => {
    dispatch({ type: "LOAD_OVERVIEW" });
    history.push("/overview");
  };

  const handleGetSubscriptions = () => {
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    history.push("/subscriptions");
  };

  const handleGetPayments = () => {
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    history.push("/subscriptions");
  };

  const handleGetSettings = () => {
    dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
    history.push("/profile");
  };
  return (
    <div className="menu">
      <ButtonHome onClick={handleGetOverview} />
      <ButtonSubscriptions onClick={handleGetSubscriptions} />
      <ButtonPayments onClick={handleGetPayments} />
      <ButtonSettings onClick={handleGetSettings} />
    </div>
  );
}
