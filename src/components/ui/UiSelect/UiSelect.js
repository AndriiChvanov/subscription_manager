import { Select } from "antd";
import "./UiSelect.css";

export function UiSelect(props) {
	const { selected } = props;
	return (
		<Select {...props} defaultValue={selected[0]}>
			{props.children}
		</Select>
	);
}
