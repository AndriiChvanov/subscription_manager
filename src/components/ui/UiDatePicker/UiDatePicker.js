import React from "react";
import { useField } from "formik";
import { DatePicker } from "antd";
import moment from "moment";

export function UiDatePicker(props) {
	const dateFormat = "YYYY-MM-DD";

	const [field, meta, helpers] = useField(props.name);

	const defaultOnChange = (date, dateString) => {
		helpers.setValue(dateString);
	};
	const onChange = (date, dateString) => {
		defaultOnChange(date, dateString);
	};
	return (
		<DatePicker
			defaultValue={moment("2020-01-01", dateFormat)}
			format={dateFormat}
			onChange={onChange}
			{...props}
		/>
	);
}
