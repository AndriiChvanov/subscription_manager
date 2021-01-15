import React, {useCallback} from "react";
import "./UiDaysLeft.css";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {daysFormated} from "@helpers/dateTimeFormated";
import netflix from "@icons/Netflix.png";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {subGetLoad} from "@actions";
import {UiSlider} from "@components/ui/UiSlider";

export function UiDaysLeft(props) {
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
        return <div></div>;
    }
    return (
        <UiSlider>
            {props.items.map((item) => {
                const {id, price, name, type, nextPaymentDate} = item;
                const filterDays = (days) => {
                    if (days >= 0) {
                        return days;
                    } else {
                        return "0";
                    }
                };
                const days = filterDays(daysFormated(nextPaymentDate));
                return (
                    <div className="ui-daysleft" key={id}>
                        <div
                            className="ui-daysleft__container"
                            onClick={() => handelGetId(id)}>
                            <div className="ui-daysleft__info text-font">
                                <img className="ui-daysleft__img" src={netflix} alt="logo"/>
                                <div className="ui-daysleft__price text-font">{`$${price}`}</div>
                            </div>
                            <div className="ui-daysleft__name text-font">{name}</div>
                            <div className="ui-daysleft__type text-type">{type}</div>
                            <div className="ui-daysleft__info text-font">
                                <div className="ui-daysleft__input text-font">
                                    <CircularProgressbar
                                        value={days}
                                        text={days}
                                        maxValue={21}
                                        counterClockwise={true}
                                        strokeWidth={12}
                                        circleRatio={1}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textSize: "40px",
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(0, 71, 201, ${days / 1})`,
                                            textColor: "#042C5C",
                                            trailColor: "#fff",
                                            backgroundColor: "#3e98c7",
                                        })}
                                    />
                                </div>
                                <div className="ui-daysleft__text">days left</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </UiSlider>
    );
}
