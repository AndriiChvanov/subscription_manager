import { Button } from "antd";
import { RightCircleFilled  } from "@ant-design/icons";
import "./UiButton.css";

export function UiButton(props) {
	return (
		<Button {...props}>
			{props.children}
			<RightCircleFilled style={{ color: "#FFFFFF" , fontSize: '32px'}} />
		</Button>
	);
}
