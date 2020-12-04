import { Button } from "antd";

import "./UiButton.css";

export function UiButton(props) {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	);
}
