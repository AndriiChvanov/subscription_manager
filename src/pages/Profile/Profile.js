import React from "react";
import { useHistory } from "react-router-dom";
import {
  UiText,
  UiProfileFormTitle,
  UiProfileFormText,
} from "@components/ui/UiTextDecoration";
import { LeftOutlined } from "@ant-design/icons";
import { UiProfileLogo } from "@components/ui/UiProfileLogo";
import { UiContainer } from "@components/ui/UiContainer";
import { UiButtonProfileChange } from "@components/ui/UiButton";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import { Menu } from "@components/Menu";

export function Profile(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, email, photoUrl } = useSelector(
    (state) => state.user.users_info
  );
  const handleLoadSubscriptions = () => {
    dispatch({ type: "LOAD_SUBSCRIPTION" });
    history.push("/subscriptions");
  };
  return (
    <div className="profile">
      <div className="profile__title">
        <LeftOutlined
          className="profile__icons"
          onClick={handleLoadSubscriptions}
        />
        <UiText className="profile__text subscription__text">Profile</UiText>
      </div>
      <div className="profile__container">
        <div className="profile__logo">
          <UiProfileLogo size={"large"} logo={photoUrl} />
          <UiButtonProfileChange>Change</UiButtonProfileChange>
        </div>
        <UiContainer>
          <div className="profile__user">
            <div className="profile__user-info">
              <UiProfileFormTitle>Full name</UiProfileFormTitle>
              <UiProfileFormText>
                {name ? name : "set your name"}
              </UiProfileFormText>
            </div>
            <div className="profile__user-info">
              <UiProfileFormTitle>Email</UiProfileFormTitle>
              <UiProfileFormText>
                {email ? email : "set your email"}
              </UiProfileFormText>
            </div>
            <div className="profile__user-info">
              <UiProfileFormTitle>Phone number</UiProfileFormTitle>
              <UiProfileFormText>+1 23 456 7890</UiProfileFormText>
            </div>
          </div>
        </UiContainer>
        <Menu />
      </div>
    </div>
  );
}
