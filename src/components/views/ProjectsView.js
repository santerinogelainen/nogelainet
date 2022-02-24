
import React from "react";
import BlockButton from "../BlockButton";
import { padStart } from "../../utils/stringUtils";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";
import ProjectModal from "../ProjectModal";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { Languages } from "../../models/languages";

const ProjectsView = ({
    projects = [],
    onComplete = null
}) => {

    const speed = 250;
    const { t, i18n } = useTranslation();
    const [activeProject, setActiveProject] = React.useState(null);
    const [activeRowKey, setActiveRowKey] = React.useState(null);

    const selectProject = React.useCallback((event, nr, project)=> {
        const pos = event.target.getBoundingClientRect();
        setActiveRowKey(project?.rowKey);
        setActiveProject({
            nr: nr,
            project: project,
            pos: pos
        });
    }, []);
    
    const items = _.orderBy(projects, x => x.Order || x.Name).map((project, index) => {
        const nr = padStart((index + 1).toString(), 2, "0");
        const name = i18n.language === Languages.Fi ? 
            project.NameFI || project.Name : 
            project.Name;
        return (
            <div className="project-item" key={index}>
                <div className="project-item-nr-mobile">
                    {nr}
                </div>
                <div className="project-item-content" style={{opacity: activeRowKey === project.rowKey ? 0 : 1}}>
                    <HighlightedWordAnimation 
                        start={true} 
                        delay={(index * speed) / 1.5} 
                        speed={speed} 
                        onComplete={index === projects.length - 1 ? onComplete : null}>
                        <BlockButton 
                            onClick={(event) => selectProject(event, nr, project)}>
                            <span className="project-item-nr">{nr + " / "}</span>{name}
                        </BlockButton>
                    </HighlightedWordAnimation>
                </div>
            </div>
        );
    });

    return <div className="projects">
        {items}
        <ProjectModal 
            project={activeProject} 
            beforeHide={() => setActiveRowKey(null)}
            afterHide={() => setActiveProject(null)} />
    </div>;

}

export default ProjectsView;