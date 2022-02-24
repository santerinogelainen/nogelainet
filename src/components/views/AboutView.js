import React from "react";
import FadeAnimation from "../animations/FadeAnimation";
import ReactMarkdown from "react-markdown"
import { useDidMountEffect } from "../../utils/reactUtils";

const AboutView = ({
    text = "", 
    onComplete = null
}) => {

    const [visible, setVisible] = React.useState(false);

    useDidMountEffect(() => {

        if (!visible) {
            setVisible(true);
        }

    }, [visible]);

    return (
        <div className="about">
            <div className="about-text-container">
                <FadeAnimation visible={visible} speed={400} after={onComplete}>
                    <ReactMarkdown className="about-text">
                        {text}
                    </ReactMarkdown>
                </FadeAnimation>
            </div>
        </div>
    )
}

export default AboutView;