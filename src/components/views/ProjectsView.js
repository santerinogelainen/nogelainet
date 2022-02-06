
import React from "react";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";

const ProjectsView = ({
    projects = [],
    onComplete = null
}) => {

    const speed = 300;

    const items = projects.map((project, index) => {
        const nr = padStart((index + 1).toString(), 2, "0");
        return (
            <div className="project-item" key={index}>
                <div className="project-item-nr-mobile">
                    {nr}
                </div>
                <HighlightedWordAnimation 
                    start={true} 
                    delay={index * (speed / 1.5)} 
                    speed={speed} 
                    onComplete={index === projects.length - 1 ? onComplete : null}>
                    <BlockButton>
                        <span className="project-item-nr">{nr + " / "}</span>{project.Name}
                    </BlockButton>
                </HighlightedWordAnimation>
            </div>
        );
    });

    return <div className="projects">
        {items}
    </div>;

}

export default ProjectsView;