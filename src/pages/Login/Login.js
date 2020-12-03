import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { UiButton } from "@components/ui/UiButton";
import { UiInput, UiInputPassword } from "@components/ui/UiInput";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import * as yup from "yup";
import { Formik } from "formik";

export function Login() {
	const validationSchema = yup.object().shape({
		email: yup.string().email().required("Please Enter your Email"),
		password: yup
			.string()
			.required("Please Enter your password")
			.matches(
				"^^(?=.*?[A-Z])(?=.*?[0-9]).{4,}$",
				"Minimum 4 characters, one upper case and one number"
			),
	});
	return (
		<div className='login'>
			<h1 className='text__h1'>Welcome</h1>
			<h2 className='text__h2'>
				Please login to your account.
				<br /> Or{" "}
				<Link to='/signup' className='text-link'>
					Sign Up
				</Link>
			</h2>
			<UiContainer style={{ marginTop: "20px" }}>
				<Formik
					initialValues={{
						email: "",
						password: "",
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
						isValid,
						handleSubmit,
						dirty,
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
							</UiLabel >
							{touched.password && errors.password && (
								<p className='errors'>{errors.password}</p>
							)}
							<UiButton
								style={{ margin: "40px" }}
								onClick={handleSubmit}
								type={`submit`}>
								Login
							</UiButton>
						</>
					)}
				</Formik>
			</UiContainer>
		</div>
	);
}
