import {Button} from "antd";

export function UiButton(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}