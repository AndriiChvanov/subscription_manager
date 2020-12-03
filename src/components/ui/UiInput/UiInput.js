import { Input } from "antd";
import "./UiInput.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export function UiInput(props) {
	return <Input {...props}/>;
}
export function UiInputPassword(props) {
	return (
		<Input.Password
			{...props}
			iconRender={(visible) =>
				visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
			}
		/>
	);
}