import "./UiContainer.css";

export function UiContainer(props) {
	return <div className='container' {...props}>{props.children}</div>;
}
