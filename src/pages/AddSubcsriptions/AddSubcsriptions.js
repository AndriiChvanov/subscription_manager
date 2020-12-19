import React from "react";
import "./AddSubcsriptions.css";
import { UiButton } from "@components/ui/UiButton";
import { UiInput } from "@components/ui/UiInput";
import { UiSelect } from "@components/ui/UiSelect";
import { UiOption } from "@components/ui/UiOption";
import { UiContainer } from "@components/ui/UiContainer";
import { UiLabel } from "@components/ui/UiLabel";
import { UiDisplay } from "@components/ui/UiDisplay";
import { RightCircleFilled } from "@ant-design/icons";

const api = ["Every 1 Month(s)", "Every 3 Month(s)", "Every 6 Month(s)"];

export function AddSubcsriptions() {
	return (
		<div className='add-subcsriptions'>
			<h1 className='subsc-h1'>Add Subscription</h1>
			<div className='add-subcsriptions-section'>
				<h2 className='subsc-h2'>
					Enter the details of a service you are subscribed to so we can help
					you track and manage it.
				</h2>
				<UiContainer>
					<UiLabel className='pt30'>
						Name
						<UiInput
							placeholder='e.g Netflix'
							className='input-large pl-hold'
						/>
					</UiLabel>
					<UiLabel className='pt15'>
						Amount
						<UiInput placeholder='₦' className='input-large pl-hold' />
					</UiLabel>
					<UiDisplay className='df spase-between'>
						<UiLabel className='pt15'>
							Next Payment
							<UiInput
								placeholder='01/11/2019'
								className='input-small pl-hold ml-11'
							/>
						</UiLabel>
						<UiLabel className='pt15 ml20'>
							Due Date
							<UiInput
								placeholder='Optional'
								className='input-small pl-hold ml-11'
							/>
						</UiLabel>
					</UiDisplay>
					<UiLabel className='pt15'>
						Billing Cycle
						<UiSelect selected={api}>
							<UiOption />
						</UiSelect>
					</UiLabel>
					<UiButton className='mt130'>
						Continue
						<RightCircleFilled style={{ color: "#FFFFFF", fontSize: "32px" }} />
					</UiButton>
				</UiContainer>
			</div>
		</div>
	);
}
