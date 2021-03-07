import React from "react";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiCurrencyInput } from "@components/ui/UiCurrencyInput";
import { UiSelect } from "@components/ui/UiSelect";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiField } from "@components/ui/UiField";
import { UiDisplay } from "@components/ui/UiDisplay";
import { UiDatePicker, UiDatePickerUpdate } from "@components/ui/UiDatePicker";
import { UiForm } from "@components/ui/UiForm";
import "./SubscriptionForm.css";

export function SubscriptionForm(props) {
  const {
    onSubmitForm,
    validationSchema,
    subscriptionTypes,
    periods,
    name,
    startDate,
    period,
    price,
    dueDate,
  } = props;
  return (
    <UiContainer>
      <UiForm onSubmit={onSubmitForm} validationSchema={validationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <UiField className="subscription-form__field pt40">
              <UiLabel>Name</UiLabel>
              <UiInput
                className="input-large pl-hold"
                placeholder="e.g Netflix"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={name ? name : values.name}
              />
            </UiField>
            {touched.name && errors.name && (
              <UiInputError>{errors.name}</UiInputError>
            )}
            <UiField className="subscription-form__field pt15">
              <UiLabel>App Type</UiLabel>
              <UiSelect
                name="appType"
                onBlur={handleBlur}
                selected={subscriptionTypes}
                defaultValue={subscriptionTypes[0].publicName}
              />
            </UiField>
            {touched.appType && errors.appType && (
              <UiInputError>{errors.appType}</UiInputError>
            )}
            <UiField className="subscription-form__field pt15">
              <UiLabel>Amount</UiLabel>
              <UiCurrencyInput
                className="ant-input input-large pl-hold"
                placeholder="$0.00"
                type="text"
                name="price"
                onChange={handleChange}
                defaultValue={price ? price : values.price}
              />
            </UiField>
            {touched.price && errors.price && (
              <UiInputError>{errors.price}</UiInputError>
            )}
            <UiDisplay className="df spase-between">
              <UiField className="pt15">
                <UiLabel>Next Payment</UiLabel>
                {startDate ? (
                  <UiDatePickerUpdate name="startDate" dateUpdate={startDate} />
                ) : (
                  <UiDatePicker name="startDate" />
                )}
              </UiField>
              <UiField className="pt15 ml20">
                <UiLabel>Due Date</UiLabel>
                {dueDate ? (
                  <UiDatePickerUpdate name="dueDate" dateUpdate={dueDate} />
                ) : (
                  <UiDatePicker name="dueDate" />
                )}
              </UiField>
            </UiDisplay>
            {touched.startDate && errors.startDate && (
              <UiInputError>{errors.startDate}</UiInputError>
            )}
            <UiField className="subscription-form__field pt15">
              <UiLabel>Billing Cycle</UiLabel>
              <UiSelect
                name="period"
                onBlur={handleBlur}
                selected={periods}
                defaultValue={period ? period : periods[0].publicName}
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
  );
}
