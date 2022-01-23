
import React from "react";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";

const ProjectsView = ({
    projects = [],
    onComplete = null
}) => {

    const speed = 300;

    return <div className="projects">
        {projects.map((project, index) => {
            return <div className="project-item" key={index}>
                <HighlightedWordAnimation 
                    start={true} 
                    delay={index * (speed / 1.5)} 
                    speed={speed} 
                    onComplete={index === projects.length - 1 ? onComplete : null}>
                    <BlockButton text={padStart((index + 1).toString(), 2, "0") + " / " + project.Name} />
                </HighlightedWordAnimation>
            </div>;
        })}
    </div>;

}

export default ProjectsView;