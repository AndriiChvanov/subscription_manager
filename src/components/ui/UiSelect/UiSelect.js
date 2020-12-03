import { Select } from "antd";
import "./UiSelect.css";

const { Option } = Select;

export function UiSelect(props) {

	const { selected } = props;

	return (
		<Select
			{...props}
			defaultValue={selected[0]}>
			{selected.map((option) => (
				<Option key={option}>{option}</Option>
			))}
		</Select>
	);
}
