import "./UiLabel.css";

export function UiLabel(props) {
return (
	<div className='label__container' {...props}>
		<label className='label'>
			{props.children}
		</label>
	</div>
);
}
