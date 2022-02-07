import React from "react";
import { Anchor } from "../models/anchor";
import MouseFollowingContainer from "./animations/MouseFollowingContainer";
import FadeAnimation from "./animations/FadeAnimation";

const HiddenContainer = ({
    visible = false,
    rotate = true,
    anchor = Anchor.Center,
    onHide = null,
    onShow = null,
    zIndex = -1,
    ...props
}) => {

    const [enabled, setEnabled] = React.useState(visible);

    const enable = () => {
        if (visible) {

            if (onShow) {
                onShow();
            }

            setEnabled(true);
        }
    };
    
    const disable = () => {
        if (!visible) {

            if (onHide) {
                onHide();
            }

            setEnabled(false);
        }
    };

    return (
        <MouseFollowingContainer
            enabled={enabled}
            rotate={rotate}
            anchor={anchor}
            zIndex={zIndex}>
            <FadeAnimation 
                visible={visible} 
                before={enable}
                after={disable}>
                {props.children}
            </FadeAnimation>
        </MouseFollowingContainer>
    )
}

export default HiddenContainer;