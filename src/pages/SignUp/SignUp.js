import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { UiButton } from "@components/ui/UiButton";
import { UiInput, UiInputPassword } from "@components/ui/UiInput";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import * as yup from "yup";
import { Formik } from "formik";

export function SignUp() {
	const validationSchema = yup.object().shape({
		email: yup.string().email().required("Please Enter your Email"),
		password: yup
			.string()
			.required("Please Enter your password")
			.matches(
				"^^(?=.*?[A-Z])(?=.*?[0-9]).{4,}$",
				"Minimum 4 characters, one upper case and one number"
			),
		repeat_password: yup
			.string()
			.oneOf([yup.ref("password")], "This password does not match")
			.required("This password does not match"),
	});
	return (
		<div className='signup'>
			<h1 className='text__h1'>Welcome</h1>
			<h2 className='text__h2'>
				Fill all fields to create the new account.
				<br /> Or{" "}
				<Link to='/login' className='text-link'>
					Login
				</Link>
			</h2>
			<UiContainer style={{ marginTop: "20px" }}>
				<Formik
					initialValues={{
						email: "",
						password: "",
						repeat_password: "",
					}}
					validateOnBlur
					onSubmit={(values) => {
						console.log(values);
					}}
					validationSchema={validationSchema}>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<>
							<UiLabel style={{ paddingTop: "40px" }}>
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
							<UiLabel style={{ paddingTop: "15px" }}>
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
							<UiLabel style={{ paddingTop: "15px" }}>
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
							<UiButton
								style={{ margin: "40px" }}
								onClick={handleSubmit}
								type={`submit`}>
								Sign Up
							</UiButton>
						</>
					)}
				</Formik>
			</UiContainer>
		</div>
	);
}
