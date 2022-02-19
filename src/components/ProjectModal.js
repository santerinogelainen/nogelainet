import React from "react";
import { useDidUpdateEffect } from "../utils/reactUtils";
import BlockButton from "./BlockButton";
import Modal from "./Modal";
import gsap, { Power2 } from "gsap";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

const ProjectModal = ({
    project = null,
    beforeHide = null,
    afterHide = null
}) => {
    
    const { t } = useTranslation();
    const [visible, setVisible] = React.useState(Boolean(project));
    const [titleOpen, setTitleOpen] = React.useState(true);
    const title = React.useRef(null);

    useDidUpdateEffect(() => {
        if (project) {
            gsap.set(title.current, { opacity: 1, top: project.pos.top });
            gsap.to(title.current, { 
                top: 0,
                duration: 0.3,
                ease: Power2.easeOut
            });
            setVisible(true);
        }
    }, [project]);

    const hideTitle = React.useCallback(() => {

        if (beforeHide) {
            beforeHide();
        }

        gsap.to(title.current, { 
            opacity: 0,
            duration: 0.3,
            ease: Power2.easeOut
        });
    }, [beforeHide]);
    
    const openTitle = React.useCallback(() => {

        setTitleOpen(true);

        if (afterHide) {
            afterHide();
        }
    }, [afterHide]);

    return (
        <div className="project-modal">
            <div className="project-modal-title" style={{opacity: 0}} ref={title}>
                <BlockButton forceOpen={titleOpen}>
                    <span className="project-item-nr">{project?.nr + " / "}</span>{project?.project.Name}
                </BlockButton>
            </div>
            <Modal visible={visible} 
                beforeHide={hideTitle} 
                afterHide={openTitle} 
                afterShow={() => setTitleOpen(false)}>
                <div className="project-modal-employer">
                    [{project?.project?.Employer}]
                </div>
                <div className="project-modal-content">
                    <ReactMarkdown>
                        {project?.project?.Description}
                    </ReactMarkdown>
                </div>
                <div className="modal-close-container" role="button" tabIndex={0} onClick={() => setVisible(false)} title={t("close")}>
                    <div className="modal-close">
                        <div className="modal-close-line" />
                        <div className="modal-close-line" />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectModal;