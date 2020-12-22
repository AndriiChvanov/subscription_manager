import React from "react";
import { useHistory } from "react-router-dom";
import "./AddSubcsriptions.css";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiCurrencyInput } from "@components/ui/UiCurrencyInput";
import { UiSelect } from "@components/ui/UiSelect";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiField } from "@components/ui/UiField";
import { UiDisplay } from "@components/ui/UiDisplay";
import { UiDatePicker } from "@components/ui/UiDatePicker";
import { Formik } from "formik";
import { LeftOutlined } from "@ant-design/icons";
import { periods } from "@constants";
import { validationSchemaAddSubscritpion } from "@helpers/validators";

export function AddSubcsriptions() {
	const history = useHistory();

	const formInitialValues = {
		name: "",
		amount: "",
		nextpayment: "",
		duedate: "",
		billingcycle: "",
	};
	const handleSingUp = (values) => {
		console.log(values);
	};
	const handelClick = () => {
		history.push("/subscriptions");
	};

	return (
		<div className='add-subcsriptions'>
			<div className='add-subcsription__title'>
				<LeftOutlined onClick={handelClick} />
				<div className='add-subcsription__text'>Add Subscription</div>
			</div>
			<div className='add-subcsriptions__desc'>
				<p className='add-subcsription__p'>
					Enter the details of a service you are subscribed to so we can help
					you track and manage it.
				</p>
				<UiContainer>
					<Formik
						initialValues={formInitialValues}
						validateOnBlur
						onSubmit={handleSingUp}
						validationSchema={validationSchemaAddSubscritpion}>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) => (
							<>
								<UiField className='add-scubscription__field pt40'>
									<UiLabel>Name</UiLabel>
									<UiInput
										className='input-large pl-hold'
										placeholder='e.g Netflix'
										name='name'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
								</UiField>
								{touched.name && errors.name && (
									<UiInputError>{errors.name}</UiInputError>
								)}
								<UiField className='add-scubscription__field pt15'>
									<UiLabel>Amount</UiLabel>
									<UiCurrencyInput
										className='ant-input input-large pl-hold'
										placeholder='$0.00'
										type='text'
										name='amount'
										onChange={handleChange}
									/>
								</UiField>
								{touched.amount && errors.amount && (
									<UiInputError>{errors.amount}</UiInputError>
								)}
								<UiDisplay className='df spase-between'>
									<UiField className='pt15'>
										<UiLabel>Next Payment</UiLabel>
										<UiDatePicker name='nextpayment' />
									</UiField>
									<UiField className='pt15 ml20'>
										<UiLabel>Due Date</UiLabel>
										<UiDatePicker name='duedate' />
									</UiField>
								</UiDisplay>
								{touched.nextpayment && errors.nextpayment && (
									<UiInputError>{errors.nextpayment}</UiInputError>
								)}
								<UiField className='add-scubscription__field pt15'>
									<UiLabel>Billing Cycle</UiLabel>
									<UiSelect
										name='billingcycle'
										onBlur={handleBlur}
										selected={periods}
										defaultValue={periods[0].name}
									/>
								</UiField>
								{touched.billingcycle && errors.billingcycle && (
									<UiInputError>{errors.billingcycle}</UiInputError>
								)}
								<UiButton variant='default' onClick={handleSubmit}>
									Continue
									<UiButtonCircle />
								</UiButton>
							</>
						)}
					</Formik>
				</UiContainer>
			</div>
		</div>
	);
}
