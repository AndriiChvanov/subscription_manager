import React from "react";
import {useField} from "formik";
import {DatePicker} from "antd";
import moment from "moment";
import {dateFormatedPicker} from '@helpers/dateTimeFormated';

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

export function UiDatePickerUpdate(props) {
    const dateFormat = "YYYY-MM-DD";
    const {dateUpdate} = props;
    const [field, meta, helpers] = useField(props.name);

    const defaultOnChange = (dateString) => {
        helpers.setValue(dateString)
    };
    console.log(dateFormatedPicker(dateUpdate))
    return (
        <DatePicker
            defaultValue={moment(dateFormatedPicker(dateUpdate), dateFormat)}
            format={dateFormat}
            onChange={(date, dateString) => defaultOnChange(dateString)}
            {...props}
        />
    );
}