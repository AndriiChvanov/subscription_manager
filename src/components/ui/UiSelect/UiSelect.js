import { Select } from "antd";
import { useField } from "formik";
import "./UiSelect.css";

export function UiSelect(props) {
	const [field, meta, helpers] = useField(props.name);
	const { selected } = props;

	const defaultOnChange = (value) => {
		helpers.setValue(value);
	};

	return (
		<Select {...props} onChange={defaultOnChange}>
			{selected.map((item) => (
				<Select.Option key={item.name} value={item.name}>
					{item.publicName}
				</Select.Option>
			))}
		</Select>
	);
}
