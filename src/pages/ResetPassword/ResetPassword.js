import React, { useCallback, useEffect } from "react";
import "./ResetPassword.css";
import { UiButton, UiButtonCircle } from "@components/ui/UiButton";
import { UiField } from "@components/ui/UiField";
import { UiInput, UiInputError } from "@components/ui/UiInput";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { validationSchemaReset } from "@helpers/validators";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { resetLoad } from "@actions";

const formInitialValues = { email: "" };

export function ResetPassword() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth.isResetPass);
	const history = useHistory();

	useEffect(() => {
		if (auth) {
			history.push("/success");
		}
	}, [auth, history]);

	const handleResetPassword = useCallback(
		(values) => {
			dispatch(resetLoad(values));
		},
		[dispatch]
	);

	return (
		<div className='reset-password'>
			<h1 className='text-h1'>Reset Password</h1>
			<h2 className='text-h2'>Please enter your email address</h2>
			<UiContainer className='ui-container mt20'>
				<Formik
					initialValues={formInitialValues}
					validateOnBlur
					onSubmit={handleResetPassword}
					validationSchema={validationSchemaReset}>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<>
							<UiField className='reset-password__field pt40'>
								<UiLabel>Email</UiLabel>
								<UiInput
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder='email@email.com'
									className='input-large pl-hold'
									rules={[
										{
											required: true,
											message: "Please input your email!",
										},
									]}
								/>
							</UiField>
							{touched.email && errors.email && (
								<UiInputError>{errors.email}</UiInputError>
							)}
							<UiButton variant='default' onClick={handleSubmit}>
								Send
								<UiButtonCircle />
							</UiButton>
						</>
					)}
				</Formik>
			</UiContainer>
		</div>
	);
}
