import React from "react";
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

const formInitialValues = { email: "", password: "" };

export function Login() {
	return (
		<div className='login-page'>
			<h1 className='text-h1'>Welcome</h1>
			<h2 className='text-h2'>
				Please login to your account.
				<br /> Or{" "}
				<Link to='/signup' className='text-link'>
					Sign Up
				</Link>
			</h2>
			<UiContainer className='ui-container mt20'>
				<Formik
					initialValues={formInitialValues}
					validateOnBlur
					onSubmit={(values) => {
						console.log(values);
					}}
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
									name={`email`}
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
									name={`password`}
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
							<UiButton className='m40' onClick={handleSubmit} type={`submit`}>
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
