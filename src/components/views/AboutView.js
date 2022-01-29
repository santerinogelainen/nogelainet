import React from "react";
import WrittenImage from "../effects/WrittenImage";
import FadeAnimation from "../animations/FadeAnimation";

const AboutView = ({
    text = "", 
    image = "", 
    onComplete = null
}) => {

    const [textVisible, setTextVisible] = React.useState(false);

    return (
        <div className="about">
            <FadeAnimation visible={textVisible} speed={400} after={onComplete}>
                <span className="large-text about-text">
                    {text}
                </span>
            </FadeAnimation>
            <div className="about-image">
                <WrittenImage src={image} speed={400} maxSize={65} afterText={() => setTextVisible(true)} />
            </div>
        </div>
    )
}

export default AboutView;