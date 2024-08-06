
import React, { useEffect } from "react";
import { Direction } from "../../models/direction";
import SlideAnimation from "./SlideAnimation";

const HighlightedWordAnimation = ({
    word = "",
    speed = 600, 
    start = true, 
    visible = false,
    delay = 0,
    from = Direction.Left,
    to = Direction.Right,
    onComplete = null,
    ...props
}) =>  {
    const [{slideOpen, wordVisible}, setState] = React.useState({
        wordVisible: visible,
        slideOpen: false
    });

    const hideSlide = React.useCallback(() => {
        setState({
            wordVisible: true,
            slideOpen: false
        });
    }, []);

    useEffect(() => {
        if (visible) {
            hideSlide();
        }
    }, [visible]);
    
    const showSlide = React.useCallback(() => {
        setState({
            wordVisible: false,
            slideOpen: true
        });
    }, []);

    React.useEffect(() => {
        if (start) {
            const timeout = setTimeout(() => {
                showSlide();
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [start, delay, showSlide]);

    return (
        <span className="highlighted-word-container">
            <SlideAnimation
                speed={speed}
                from={from}
                to={to}
                open={slideOpen}
                after={slideOpen ? hideSlide : onComplete}>
                <span className={"highlighted-word" + (wordVisible ? " highlighted-word-visible" : "")}>
                    {word || props.children}
                </span>
            </SlideAnimation>
        </span>
    );

}

export default HighlightedWordAnimation; 