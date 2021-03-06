import React, { useCallback, useEffect } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiField } from "@components/ui/UiField";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiInputPassword } from "@components/ui/UiInputPassword";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiForm } from "@components/ui/UiForm";
import { validationSchemaSignUp } from "@helpers/validators";
import { signUpLoad } from "@actions";
import { notification } from "antd";

export function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth.isAuth);
  const authError = useSelector((state) => state.auth.error);

  const handleSingUp = useCallback(
    ({ email, password }) => {
      dispatch(signUpLoad({ email, password }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (authError) {
      notification.error({
        message: "Error",
        description: "Incorrect email or password",
      });
    }
    if (auth) {
      dispatch({ type: "LOAD_ALL_SUBSCRIPTION" });
      dispatch({ type: "LOAD_OVERVIEW" });
      history.push("/subscriptions");
    }
  }, [auth, authError, dispatch, history]);

  return (
    <div className="signup-page">
      <h1 className="text-h1">Welcome</h1>
      <h2 className="text-h2">
        Fill all fields to create the new account.
        <Link to="/login" className="text-link">
          <p className="text-p">Login</p>
        </Link>
      </h2>
      <UiContainer className="ui-container mt20">
        <UiForm
          onSubmit={handleSingUp}
          validationSchema={validationSchemaSignUp}
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
              <UiField className="signup-page__field pt40">
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
              <UiField className="signup-page__field pt15">
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
              <UiField className="signup-page__field pt15">
                <UiLabel>Repeat password</UiLabel>
                <UiInputPassword
                  name="repeat_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeat_password}
                  placeholder="repeat password"
                  className="input-large pl-hold"
                />
              </UiField>
              {touched.repeat_password && errors.repeat_password && (
                <UiInputError>{errors.repeat_password}</UiInputError>
              )}
              <UiButton variant="default" onClick={handleSubmit}>
                Sign Up <UiButtonCircle />
              </UiButton>
            </>
          )}
        </UiForm>
      </UiContainer>
    </div>
  );
}
