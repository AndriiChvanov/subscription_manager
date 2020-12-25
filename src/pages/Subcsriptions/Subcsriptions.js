import React from "react";
import { useHistory } from "react-router-dom";
import { UiContainer } from "@components/ui/UiContainer";
import { AddIcon } from "@icons/addIcon";
import { UiTitle, UiText } from "@components/ui/UiTextDecoration";

import "./Subcsriptions.css";

export function Subcsriptions() {
	const history = useHistory();

	const handelClick = () => {
		history.push("/addsubcsriptions");
	};
	return (
		<div className='subcsriptions'>
			<UiContainer className='subcsription__container'>
				<div className='subcsription__title'>
					<UiTitle>Subscription</UiTitle>
					<AddIcon onClick={handelClick} />
				</div>
				<div className='subcsriptions__desc'>
					<UiText>Upcoming</UiText>
				</div>
			</UiContainer>
		</div>
	);
}
