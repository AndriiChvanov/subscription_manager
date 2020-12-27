import "./UiForm.css";
import { Formik } from "formik";

const formInitialValues = {};

export function UiForm(props) {
	console.log(formInitialValues);
	return (
		<Formik {...props} initialValues={formInitialValues} validateOnBlur>
			{props.children}
		</Formik>
	);
}
