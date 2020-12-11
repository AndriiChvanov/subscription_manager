import React, { useCallback } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiInputPassword } from "@components/ui/UiInputPassword";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { Formik } from "formik";
import { RightCircleFilled } from "@ant-design/icons";
import { validationSchemaLogin } from "@helpers/Validators";
import { authSignIn } from "@services/firebase/AuthSignIn";

const formInitialValues = { email: "", password: "" };

export function Login() {
	const handleSingIn = useCallback((values) => {
		if (!values.email || !values.password) return;
		authSignIn(values.email, values.password);
	}, []);

	return (
		<div className='login-page'>
			<h1 className='text-h1'>Welcome</h1>
			<h2 className='text-h2'>
				Please login to your account.
				<Link to='/signup' className='text-link'>
					<p className='text-p'>Sign Up</p>
				</Link>
			</h2>
			<UiContainer className='ui-container mt20'>
				<Formik
					initialValues={formInitialValues}
					validateOnBlur
					onSubmit={handleSingIn}
					validationSchema={validationSchemaLogin}>
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
							<UiLabel className='pt15'>
								Password
								<UiInputPassword
									name='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									placeholder='password'
									className='input-large pl-hold'
								/>
							</UiLabel>
							{touched.password && errors.password && (
								<p className='errors'>{errors.password}</p>
							)}
							<UiButton className='m40' onClick={handleSubmit}>
								Login
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
