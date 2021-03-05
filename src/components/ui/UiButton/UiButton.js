import { Button } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import "./UiButton.css";
import profileChange from "@icons/change-foto.png";

export function UiButton(props) {
  const btnClass =
    props.variant === "secondary" ? "ui-button__secondary" : "ui-button";

  return (
    <Button className={btnClass} {...props}>
      {props.children}
    </Button>
  );
}

export function UiButtonCircle(props) {
  return (
    <RightCircleFilled
      style={{ color: "#FFFFFF", fontSize: "32px" }}
      {...props}
    />
  );
}
export function UiButtonProfileChange(props) {
  return (
    <Button className="button__profile-change" {...props}>
      <img src={profileChange} alt="change image" />
      {props.children}
    </Button>
  );
}
