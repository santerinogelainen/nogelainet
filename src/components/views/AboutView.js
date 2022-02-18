import React from "react";
import WrittenImage from "../effects/WrittenImage";
import FadeAnimation from "../animations/FadeAnimation";
import ReactMarkdown from "react-markdown"
import { useDidMountEffect } from "../../utils/reactUtils";

const AboutView = ({
    text = "", 
    image = "", 
    onComplete = null
}) => {

    const [textVisible, setTextVisible] = React.useState(false);

    useDidMountEffect(() => {

        if (!textVisible) {
            setTextVisible(true);
        }

    }, [textVisible]);

    return (
        <div className="about">
            <div className="about-text-container">
                <FadeAnimation visible={textVisible} speed={400} after={onComplete}>
                    <ReactMarkdown className="about-text">
                        {text}
                    </ReactMarkdown>
                </FadeAnimation>
            </div>
            {/* <div className="about-image">
                <WrittenImage src={image} speed={400} maxSize={35} afterText={() => setTextVisible(true)} />
            </div> */}
        </div>
    )
}

export default AboutView;