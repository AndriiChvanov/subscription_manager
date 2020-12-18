import React from "react";
import "./Success.css";
import { UiButton } from "@components/ui/UiButton";
import { Link } from "react-router-dom";

export function Success() {
	return (
		<div className='success'>
			<div className='success-img'></div>
			<h1 className='success-h1'>Successful</h1>
			<Link to='/'>
				<UiButton>Return</UiButton>
			</Link>
		</div>
	);
}
