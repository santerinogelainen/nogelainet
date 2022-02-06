import React from "react";
import SlideAnimation from "./animations/SlideAnimation";
import { Direction } from "../models/direction";

const BlockButton = ({
    text = "", 
    onClick = null, 
    ...props
}) => {

    const [slideOpen, setSlideOpen] = React.useState(false);

    return (
        <div className="block-button-container" 
            onMouseEnter={() => setSlideOpen(true)} 
            onMouseLeave={() => setSlideOpen(false)} 
            onClick={onClick}>
            <SlideAnimation
                open={slideOpen}
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