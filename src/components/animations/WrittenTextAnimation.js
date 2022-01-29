
import React from "react";

const WrittenTextAnimation = ({
    enabled = true,
    finished = false,
    loop = false,
    delay = 0,
    speed = 30,
    text = "",
    onStart = null,
    onEnd = null
}) => {

    const getInitialState = React.useCallback(() => {
        return {
            visible: finished ? text : "",
            hidden: finished ? "" : text,
            finished: finished
        }
    }, [text, finished]);

    const [state, setState] = React.useState(getInitialState());

    // reset position if text changes
    React.useEffect(() => setState(getInitialState()), [getInitialState]);

    React.useEffect(() => {

        if (state.visible == text) {
            
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

        if (enabled) {
            
            if (!state.visible && onStart) {
                onStart();
            }

            const interval = setInterval(() => {
                setState({
                    visible: state.visible + state.hidden.substring(0, 1),
                    hidden: state.hidden.substring(1)
                });
            }, speed);

            return () => clearInterval(interval);
        }

    });

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