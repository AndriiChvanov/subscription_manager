import React, { useCallback, useEffect } from "react";
import "./ResetPassword.css";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { validationSchemaReset } from "@helpers/validators";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { RightCircleFilled } from "@ant-design/icons";
import { resetLoad } from "@actions";

const formInitialValues = { email: "" };

export function ResetPassword() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth.isResetPass);

	useEffect(() => {}, [auth]);

	const handleResetPassword = useCallback(
		(values) => {
			dispatch(resetLoad(values));
		},
		[dispatch]
	);

	if (auth) {
		return <Redirect to='/success' />;
	}
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
							<UiLabel className='pt40'>
								Email
								<UiInput
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder='email@email.com'
									className='input-large pl-hold'
								/>
							</UiLabel>
							{touched.email && errors.email && (
								<p className='errors'>{errors.email}</p>
							)}
							<UiButton className='m40' onClick={handleSubmit}>
								Send
								<RightCircleFilled
									style={{ color: "#FFFFFF", fontSize: "32px" }}
								/>
							</UiButton>
						</>
					)}
				</Formik>
			</UiContainer>
		</div>
	);
}
