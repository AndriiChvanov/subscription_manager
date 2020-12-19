import React, { useCallback, useEffect } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiInputPassword } from "@components/ui/UiInputPassword";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { Formik } from "formik";
import { notification } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import { validationSchemaLogin } from "@helpers/validators";
import { loginLoad } from "@actions";

const formInitialValues = { email: "", password: "" };

export function Login() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth.isAuth);
	const authError = useSelector((state) => state.auth.error);

	const openNotificationWithIcon = (type) => {
		notification[type]({
			message: "Error",
			description: "Incorrect login or password",
		});
	};

	useEffect(() => {
		if (authError) {
			openNotificationWithIcon("error");
		}
	}, [auth, authError]);

	const handleSingIn = useCallback(
		(values) => {
			dispatch(loginLoad(values));
		},
		[dispatch]
	);

	if (auth) {
		return <Redirect to='/' />;
	}

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
