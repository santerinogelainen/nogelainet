
import React from "react";
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

    function getInitialState() {
        return {
            wordVisible: visible,
            slideOpen: false
        }
    }

    const [state, setState] = React.useState(getInitialState());

    React.useEffect(() => {

        if (start) {

            const timeout = setTimeout(() => {
    
                showSlide();
    
            }, delay);

            return () => clearTimeout(timeout);

        }
        else {
            setState(getInitialState());
        }

    }, [start, visible, delay, showSlide])

    const hideSlide = () => {
        setState({
            wordVisible: true,
            slideOpen: false
        });
    }
    
    const showSlide = () => {
        setState({
            wordVisible: false,
            slideOpen: true
        });
    }

    return (
        <span className="highlighted-word-container">
            <SlideAnimation
                speed={speed}
                from={from}
                to={to}
                open={state.slideOpen}
                after={state.slideOpen ? hideSlide : onComplete}>
                <span className="highlighted-word" style={{opacity: state.wordVisible ? 1 : 0}}>
                    {word || props.children}
                </span>
            </SlideAnimation>
        </span>
    );

}

export default HighlightedWordAnimation; 