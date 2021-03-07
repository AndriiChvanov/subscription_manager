import React, { useCallback, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiField } from "@components/ui/UiField";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiInputPassword } from "@components/ui/UiInputPassword";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiForm } from "@components/ui/UiForm";
import { notification } from "antd";
import { validationSchemaLogin } from "@helpers/validators";
import { loginLoad } from "@actions";

export function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth.isAuth);
  const authError = useSelector((state) => state.auth.error);

  const handleSingIn = useCallback(
    ({ email, password }) => {
      dispatch(loginLoad({ email, password }));
      dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
      dispatch({ type: "LOAD_OVERVIEW" });
    },
    [dispatch]
  );

  useEffect(() => {
    if (authError) {
      notification.error({
        message: "Error",
        description: "Incorrect login or password",
      });
    }
    if (auth) {
      dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
      dispatch({ type: "LOAD_OVERVIEW" });
      history.push("/subscriptions");
    }
  }, [auth, authError, dispatch, history]);

  return (
    <div className="login-page">
      <h1 className="text-h1">Welcome</h1>
      <h2 className="text-h2">
        Please login to your account.
        <Link to="/signup" className="text-link">
          <p className="text-p">Sign Up</p>
        </Link>
      </h2>
      <UiContainer className="ui-container mt20">
        <UiForm
          onSubmit={handleSingIn}
          validationSchema={validationSchemaLogin}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <UiField className="login-page__field pt40">
                <UiLabel>Email</UiLabel>
                <UiInput
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="email@email.com"
                  className="input-large pl-hold"
                />
              </UiField>
              {touched.email && errors.email && (
                <UiInputError>{errors.email}</UiInputError>
              )}
              <UiField className="login-page__field pt15">
                <UiLabel>Password</UiLabel>
                <UiInputPassword
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="password"
                  className="input-large pl-hold"
                />
              </UiField>
              {touched.password && errors.password && (
                <UiInputError>{errors.password}</UiInputError>
              )}
              <UiButton variant="default" onClick={handleSubmit}>
                Login
                <UiButtonCircle />
              </UiButton>
            </>
          )}
        </UiForm>
      </UiContainer>
    </div>
  );
}
