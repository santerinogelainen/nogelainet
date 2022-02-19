import React from "react";
import { useDidUpdateEffect } from "../utils/reactUtils";
import BlockButton from "./BlockButton";
import Modal from "./Modal";
import gsap, { Power2 } from "gsap";

const ProjectModal = ({
    project = null,
    beforeHide = null,
    afterHide = null
}) => {
    
    const [visible, setVisible] = React.useState(Boolean(project));
    const [titleOpen, setTitleOpen] = React.useState(true);
    const title = React.useRef(null);

    useDidUpdateEffect(() => {
        if (project) {
            console.log(project);
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
                <div className="project-modal-content">

                </div>
                <button type="button" onClick={() => setVisible(false)} style={{marginTop: "100px"}}>Close</button>
            </Modal>
        </div>
    )
}

export default ProjectModal;