import React from "react";

const AboutView = ({text = ""}) => {

    return (
        <div className="large-text about">
            {text}
        </div>
    )
}

export default AboutView;