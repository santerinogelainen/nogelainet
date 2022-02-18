
import React from "react";
import WrittenTextAnimation from "../animations/WrittenTextAnimation";

const ConsoleInputPlaceholder = ({
    enabled = true,
    delay = 6000,
    helpTexts = [],
    onComplete = null
}) => {

    const [index, setIndex] = React.useState(0);

    const nextIndex = () => {
        
        if (enabled) {

            if (onComplete) {
                onComplete(index, getCurrentHelpText());
            }

            let newIndex = index + 1;

            if (newIndex === helpTexts.length) {
                newIndex = 0;
            }

            setIndex(newIndex);
        }
    }

    const getCurrentHelpText = () => {
        return helpTexts[index] ?? "";
    }

    return (
        <div className="console-input-placeholder large-text noselect">
            <WrittenTextAnimation enabled={enabled} delay={delay} loop={false} text={getCurrentHelpText()} onEnd={nextIndex} />
        </div>
    );
}

export default ConsoleInputPlaceholder;