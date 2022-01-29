import React from "react";
import WrittenImage from "../effects/WrittenImage";

const AboutView = ({text = "", image = ""}) => {

    return (
        <div className="about">
            <span className="large-text about-text">
                {text}
            </span>
            <div className="about-image">
                <WrittenImage src={image} maxSize={65} />
            </div>
        </div>
    )
}

export default AboutView;