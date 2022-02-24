import React from "react";
import { useDidUpdateEffect } from "../utils/reactUtils";
import BlockButton from "./BlockButton";
import Modal from "./Modal";
import gsap, { Power2 } from "gsap";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { Languages } from "../models/languages";

const ProjectModal = ({
    project = null,
    beforeHide = null,
    afterHide = null
}) => {
    
    const { t, i18n } = useTranslation();
    const [visible, setVisible] = React.useState(Boolean(project));
    const [titleOpen, setTitleOpen] = React.useState(true);
    const title = React.useRef(null);

    const name = i18n.language === Languages.Fi ? 
        project?.project.NameFI || project?.project.Name : 
        project?.project.Name;
        
    const employer = i18n.language === Languages.Fi ? 
        project?.project.EmployerFI || project?.project.Employer : 
        project?.project.Employer;
        
    const description = i18n.language === Languages.Fi ? 
        project?.project.DescriptionFI || project?.project.Description : 
        project?.project.Description;

    const hide = React.useCallback(() => {
        setVisible(false);
    }, []);

    React.useEffect(() => {
        if (visible) {
            window.addEventListener("keydown", hide);
            return () => window.removeEventListener("keydown", hide);
        }
    }, [visible, hide]);

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
                    <span className="project-item-nr">{project?.nr + " / "}</span>{name}
                </BlockButton>
            </div>
            <Modal visible={visible} 
                beforeHide={hideTitle} 
                afterHide={openTitle} 
                afterShow={() => setTitleOpen(false)}>
                <div className="project-modal-container">
                    <div className="project-modal-employer">
                        [{employer}]
                    </div>
                    <div className="project-modal-content">
                        <ReactMarkdown>
                            {description}
                        </ReactMarkdown>
                    </div>
                    <div className="modal-close-container" role="button" tabIndex={0} onClick={hide} title={t("close")}>
                        <div className="modal-close">
                            <div className="modal-close-line" />
                            <div className="modal-close-line" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectModal;