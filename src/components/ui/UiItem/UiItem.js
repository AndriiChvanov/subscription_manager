import React, { useCallback } from "react";
import { dateFormated } from "@helpers/dateTimeFormated";
import netflix from "@icons/Netflix.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subGetLoad } from "@actions";
import "./UiItem.css";

export function UiItem(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handelGetId = useCallback(
		(id) => {
			dispatch(subGetLoad(id));
			history.push("/subscription-info");
		},
		[dispatch, history]
	);

	if (!props.items) {
		return <div> </div>;
	}

	return props.items.map((item) => {
		const { id, name, price, nextPaymentDate } = item;

		return (
			<div className='ui-item' key={id}>
				<div className='ui-item__container' onClick={() => handelGetId(id)}>
					<img src={netflix} alt='logo' className='ui-item__img' />
					<div className='ui-item__info'>
						<div className='ui-item__name text-font'>{name}</div>
						<div className='ui-item__date text-type'>
							{dateFormated(nextPaymentDate)}
						</div>
					</div>
					<div className='ui-item__price text-font'>{`$${price}`}</div>
				</div>
				<div className='ui-item__border'></div>
			</div>
		);
	});
}
