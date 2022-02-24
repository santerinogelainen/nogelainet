import React from "react";
import { Anchor } from "../models/anchor";
import MouseFollowingContainer from "./animations/MouseFollowingContainer";
import FadeAnimation from "./animations/FadeAnimation";

const HiddenContainer = ({
    visible = false,
    enabled = true,
    rotate = true,
    anchor = Anchor.Center,
    onHide = null,
    onShow = null,
    zIndex = -1,
    ...props
}) => {

    const [following, setFollowing] = React.useState(visible);

    const start = () => {
        if (visible) {

            if (onShow) {
                onShow();
            }

            setFollowing(true);
        }
    };
    
    const stop = () => {
        if (!visible) {

            if (onHide) {
                onHide();
            }

            setFollowing(false);
        }
    };

    return (
        <MouseFollowingContainer
            enabled={enabled && following}
            rotate={rotate}
            anchor={anchor}
            zIndex={zIndex}>
            <FadeAnimation 
                visible={enabled && visible} 
                before={start}
                after={stop}>
                {props.children}
            </FadeAnimation>
        </MouseFollowingContainer>
    )
}

export default HiddenContainer;