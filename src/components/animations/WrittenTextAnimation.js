
import React from "react";

const WrittenTextAnimation = ({
    enabled = true,
    loop = false,
    delay = 0,
    speed = 30,
    text = "",
    textVisible = "",
    onStart = null,
    onEnd = null
}) => {

    const getInitialState = () => {
        return {
            visible: textVisible,
            hidden: text,
            finished: textVisible === text
        }
    } 

    const [state, setState] = React.useState(getInitialState());

    // reset position if text changes
    React.useEffect(() => setState(getInitialState()), [text, textVisible]);

    React.useEffect(() => {

        if (state.visible == text) {
            return endAnimation();
        }

        if (enabled) {
            return startAnimation();
        }

    });

    const nextLetter = () => {
        setState({
            visible: state.visible + state.hidden.substring(0, 1),
            hidden: state.hidden.substring(1)
        });
    }

    const startAnimation = () => {

        if (!state.visible && onStart) {
            onStart();
        }

        const interval = setInterval(nextLetter, speed);
        return () => clearInterval(interval);
    }

    const endAnimation = () => {
        
        const timeout = setTimeout(() => {

            if (!state.finished && onEnd) {
                onEnd();
            }

            setState({
                ...state,
                finished: true
            });

            if (loop) {
                setState(getInitialState());
            }
        }, delay);
        
        return () => clearTimeout(timeout);
    }
    
    return (
        <span className="written-text-container">
            <span className="written-text-visible">
                {state.visible}
            </span>
            <span className="written-text-hidden noselect">
                {state.hidden}
            </span>
        </span>
    );

}

export default WrittenTextAnimation;