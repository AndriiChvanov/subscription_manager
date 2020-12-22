import React from "react";
import "./Success.css";
import { UiButton } from "@components/ui/UiButton";
import { Link } from "react-router-dom";

export function Success() {
	return (
		<div className='success'>
			<div className='success__img'></div>
			<h1 className='success__text'>Successful</h1>
			<Link to='/'>
				<UiButton variant='secondary'>Return</UiButton>
			</Link>
		</div>
	);
}
