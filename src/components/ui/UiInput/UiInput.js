import { Input } from "antd";
import "./UiInput.css";

export function UiInput(props) {
	return <Input {...props} />;
}

export function UiInputError(props) {
	return (
		<div className='ui-input__error' {...props}>
			{props.children}
		</div>
	);
}
