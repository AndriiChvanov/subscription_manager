import "./UiContainer.css";

export function UiContainer(props) {
	return <div className='ui-container' {...props}>{props.children}</div>;
}
