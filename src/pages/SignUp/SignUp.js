import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiInputPassword } from "@components/ui/UiInputPassword";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { Formik } from "formik";
import { RightCircleFilled } from "@ant-design/icons";
import { validationSchemaSignUp } from "@helpers/Validators";

const formInitialValues = { email: "", password: "", repeat_password: "" };

export function SignUp() {
	
	return (
		<div className='signup-page'>
			<h1 className='text-h1'>Welcome</h1>
			<h2 className='text-h2'>
				Fill all fields to create the new account.
				<br /> Or{" "}
				<Link to='/login' className='text-link'>
					Login
				</Link>
			</h2>
			<UiContainer className='ui-container mt20'>
				<Formik
					initialValues={formInitialValues}
					validateOnBlur
					onSubmit={(values) => {
						console.log(values);
					}}
					validationSchema={validationSchemaSignUp}>
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
							<UiLabel className='pt15'>
								Repeat password
								<UiInputPassword
									name={`repeat_password`}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.repeat_password}
									placeholder='repeat password'
									className='input-large pl-hold'
								/>
							</UiLabel>
							{touched.repeat_password && errors.repeat_password && (
								<p className='errors'>{errors.repeat_password}</p>
							)}
							<UiButton className='m40' onClick={handleSubmit} type={`submit`}>
								Sign Up
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
