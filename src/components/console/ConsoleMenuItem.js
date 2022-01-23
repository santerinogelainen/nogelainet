import React from "react"
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation"

const ConsoleMenuItem = ({
    visible = false,
    delay = 0,
    speed = 250,
    name = "",
    command = "",
    active = false,
    onClick = null
}) => {

    let className = "console-menu-item noselect";

    if (active)
        className += " console-menu-item-active";

    return (
        <div className={className} onClick={(e) => onClick(command, e)}>
            <HighlightedWordAnimation
                word={name}
                start={visible}
                delay={delay}
                speed={speed} />
        </div>
    )

}

export default ConsoleMenuItem;