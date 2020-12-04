import { Select } from "antd";
import "./UiOption.css";

export function UiOption(props) {
	return <Select.Option {...props}>{props.childern}</Select.Option>;
}
