import * as yup from "yup";

const validationSchemaLogin = yup.object().shape({
	email: yup.string().email().required("Please Enter your Email"),
	password: yup
		.string()
		.required("Please Enter your password")
		.matches(
			"^^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$",
			"Minimum 8 characters, one upper case and one number"
		),
});
const validationSchemaSignUp = yup.object().shape({
	email: yup.string().email().required("Please Enter your Email"),
	password: yup
		.string()
		.required("Please Enter your password")
		.matches(
			"^^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$",
			"Minimum 8 characters, one upper case and one number"
		),
	repeat_password: yup
		.string()
		.oneOf([yup.ref("password")], "This password does not match")
		.required("This password does not match"),
});
export { validationSchemaLogin, validationSchemaSignUp };
