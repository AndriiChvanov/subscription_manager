import { Button } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import "./UiButton.css";

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
