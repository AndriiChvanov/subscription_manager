import { Input } from "antd";
import "./UiInputPassword.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

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
