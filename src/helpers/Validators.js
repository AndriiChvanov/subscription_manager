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
const validationSchemaReset = yup.object().shape({
	email: yup.string().email().required("Please Enter your Email"),
});
const validationSchemaAddSubscritpion = yup.object().shape({
	name: yup.string().required("Please Enter Name Subscription"),
	price: yup.string().required("Please Enter Amount"),
	startDate: yup.string().required("Please Enter Next Payment"),
	duedate: yup.string(),
	period: yup.string().required("Please Enter select Billing Cycle"),
});
export {
	validationSchemaLogin,
	validationSchemaSignUp,
	validationSchemaReset,
	validationSchemaAddSubscritpion,
};
