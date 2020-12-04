import React from "react";
import "./GuideLine.css";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiSelect } from "@components/ui/UiSelect";
import { UiOption } from "@components/ui/UiOption";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiDisplay } from "@components/ui/UiDisplay";
import { RightCircleFilled } from "@ant-design/icons";

const api = ["Every 1 Month(s)", "Every 3 Month(s)", "Every 6 Month(s)"];

export function GuideLine() {
	return (
		<div className='guideLine'>
			<h1>GuideLine Page</h1>
			<div className='Guideline-section'>
				<h2>Button Examples</h2>
				<UiContainer>
					<UiLabel>
						Name
						<UiInput
							placeholder='e.g Netflix'
							className='input-large pl-hold'
						/>
					</UiLabel>
					<UiLabel>
						Amount
						<UiInput placeholder='₦' className='input-large pl-hold' />
					</UiLabel>
					<UiDisplay
						style={{ display: "flex", justifyContent: "space-between" }}>
						<UiLabel>
							Next Payment
							<UiInput
								placeholder='1/11/2019'
								className='input-small pl-hold'
								style={{ marginLeft: "-11px" }}
							/>
						</UiLabel>
						<UiLabel>
							Due Date
							<UiInput
								placeholder='Optional'
								className='input-small pl-hold'
								style={{ marginLeft: "-11px" }}
							/>
						</UiLabel>
					</UiDisplay>
					<UiLabel>
						Billing Cycle
						<UiSelect selected={api}>
							<UiOption />
						</UiSelect>
					</UiLabel>
					<UiButton style={{ marginTop: "20px" }}>
						Continue{" "}
						<RightCircleFilled style={{ color: "#FFFFFF", fontSize: "32px" }} />
					</UiButton>
				</UiContainer>
			</div>
		</div>
	);
}
