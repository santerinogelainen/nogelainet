import React from "react";
import SlideAnimation from "./animations/SlideAnimation";
import { Direction } from "../models/direction";

const BlockButton = ({
    text = "", 
    forceOpen = null,
    onClick = null, 
    ...props
}) => {
    const [slideOpen, setSlideOpen] = React.useState(forceOpen || false);

    return (
        <div className="block-button-container" 
            onMouseEnter={() => setSlideOpen(true)} 
            onMouseLeave={() => setSlideOpen(false)} 
            onClick={onClick}>
            <SlideAnimation
                open={forceOpen !== null ? forceOpen : slideOpen}
                from={Direction.Left}
                to={Direction.Right}>
                <div className="block-button noselect">
                    {text || props.children}
                </div>
            </SlideAnimation>
        </div>
    )

}

export default BlockButton;