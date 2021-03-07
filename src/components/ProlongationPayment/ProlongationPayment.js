import React, { useState } from "react";
import "./ProlongationPayment.css";
import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export function ProlongationPayment(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const menuPopover = (
    <>
      <p onClick={props.handlerEditSubscription}>Edit Subscription</p>
      <p onClick={props.handlerProlongationPayment}>Prolongation Payment</p>
    </>
  );
  const popoverModal = () => {
    popoverOpen === true ? setPopoverOpen(false) : setPopoverOpen(true);
  };

  return (
    <Popover
      content={menuPopover}
      trigger="click"
      visible={popoverOpen}
      onVisibleChange={popoverModal}
    >
      <MoreOutlined
        className="subscription-info__icons"
        onClick={() => setPopoverOpen(true)}
      />
    </Popover>
  );
}
