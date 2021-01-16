import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UpdateSubscriptions.css";
import { useDispatch, useSelector } from "react-redux";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiCurrencyInput } from "@components/ui/UiCurrencyInput";
import { UiSelect } from "@components/ui/UiSelect";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiField } from "@components/ui/UiField";
import { UiDisplay } from "@components/ui/UiDisplay";
import { UiDatePickerUpdate } from "@components/ui/UiDatePicker";
import { UiForm } from "@components/ui/UiForm";
import { LeftOutlined } from "@ant-design/icons";
import { periods } from "@constants";
import { validationSchemaAddSubscritpion } from "@helpers/validators";
import { subUpdate } from "@actions";

export function UpdateSubscriptions() {
  const dispatch = useDispatch();
  const history = useHistory();

  const subTypes = useSelector((state) => state.subscriptions.sub_types);
  const { id, name, startDate, period, price, dueDate, appType } = useSelector(
    (state) => state.subscriptions.sub_info
  );

  const handleSingUp = useCallback(
    ({ name, startDate, period, price, dueDate, appType }) => {
      dispatch(
        subUpdate({ name, startDate, period, price, dueDate, id: id, appType })
      );
      dispatch({ type: "SUB_LOAD" });
      history.push("/subscriptions");
    },
    [dispatch, history, id]
  );

  const handelClick = () => {
    dispatch({ type: "SUB_LOAD" });
    history.push("/subscriptions");
  };
  useEffect(() => {
    dispatch({ type: "SUB_LOAD" });
  }, [dispatch, history]);

  return (
    <div className="update-subscriptions">
      <div className="update-subscription__title subc__title">
        <LeftOutlined
          onClick={handelClick}
          className="update-subscriptions__icons"
        />
        <div className="update-subscription__text subc__text">
          Update Subscription
        </div>
      </div>
      <div className="update-subscriptions__desc subc__desc">
        <p className="update-subscription__p subc__p">
          Enter the details of a service you are subscribed to so we can help
          you track and manage it.
        </p>
        <UiContainer>
          <UiForm
            onSubmit={handleSingUp}
            validationSchema={validationSchemaAddSubscritpion}
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
                <UiField className="update-subscription__field pt40">
                  <UiLabel>Name</UiLabel>
                  <UiInput
                    className="input-large pl-hold"
                    placeholder="e.g Netflix"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={name}
                  />
                </UiField>
                {touched.name && errors.name && (
                  <UiInputError>{errors.name}</UiInputError>
                )}
                <UiField className="add-scubscription__field pt15">
                  <UiLabel>App Type</UiLabel>
                  <UiSelect
                    name="appType"
                    onBlur={handleBlur}
                    selected={subTypes}
                    defaultValue={appType}
                  />
                </UiField>
                {touched.appType && errors.appType && (
                  <UiInputError>{errors.appType}</UiInputError>
                )}
                <UiField className="update-scubscription__field pt15">
                  <UiLabel>Amount</UiLabel>
                  <UiCurrencyInput
                    className="ant-input input-large pl-hold"
                    placeholder="$0.00"
                    type="text"
                    name="price"
                    onChange={handleChange}
                    defaultValue={price}
                  />
                </UiField>
                {touched.price && errors.price && (
                  <UiInputError>{errors.price}</UiInputError>
                )}
                <UiDisplay className="df spase-between">
                  <UiField className="pt15">
                    <UiLabel>Next Payment</UiLabel>
                    <UiDatePickerUpdate
                      name="startDate"
                      dateUpdate={startDate}
                    />
                  </UiField>
                  <UiField className="pt15 ml20">
                    <UiLabel>Due Date</UiLabel>
                    <UiDatePickerUpdate name="dueDate" dateUpdate={dueDate} />
                  </UiField>
                </UiDisplay>
                {touched.startDate && errors.startDate && (
                  <UiInputError>{errors.startDate}</UiInputError>
                )}
                <UiField className="update-scubscription__field pt15">
                  <UiLabel>Billing Cycle</UiLabel>
                  <UiSelect
                    name="period"
                    onBlur={handleBlur}
                    selected={periods}
                    defaultValue={period}
                  />
                </UiField>
                {touched.period && errors.period && (
                  <UiInputError>{errors.period}</UiInputError>
                )}
                <UiButton variant="default" onClick={handleSubmit}>
                  Continue
                  <UiButtonCircle />
                </UiButton>
              </>
            )}
          </UiForm>
        </UiContainer>
      </div>
    </div>
  );
}
