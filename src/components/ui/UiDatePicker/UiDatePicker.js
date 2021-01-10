import React from "react";
import { useField } from "formik";
import { DatePicker } from "antd";
import moment from "moment";

export function UiDatePicker(props) {
	const dateFormat = "YYYY-MM-DD";

	const [field, meta, helpers] = useField(props.name);

	const defaultOnChange = (dateString) => {
		helpers.setValue(dateString);
	};

	return (
		<DatePicker
			defaultValue={moment("2021-01-01", dateFormat)}
			format={dateFormat}
			onChange={(date, dateString) => defaultOnChange(dateString)}
			{...props}
		/>
	);
}
