import "./UiLabel.css";

export function UiLabel(props) {
return (
	<>
		<label className='label' {...props}>
			{props.children}
		</label>
	</>
);
}
