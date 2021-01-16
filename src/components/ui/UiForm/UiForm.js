import "./UiForm.css";
import { Formik } from "formik";

const formInitialValues = {
  email: "",
  password: "",
  repeat_password: "",
  price: "",
  name: "",
  startDate: "",
  dueDate: "",
  period: "",
  appType: "",
};

export function UiForm(props) {
  return (
    <Formik {...props} initialValues={formInitialValues} validateOnBlur>
      {props.children}
    </Formik>
  );
}
