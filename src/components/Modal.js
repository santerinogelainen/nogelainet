import React from "react";
import { useDidUpdateEffect } from "../utils/reactUtils";
import gsap, { Power2 } from "gsap";

const Modal = ({
    visible = false,
    beforeShow = null,
    afterShow = null,
    beforeHide = null,
    afterHide = null,
    ...props
}) => {

    const visibleByDefault = React.useRef(visible);
    const modal = React.useRef(null);

    useDidUpdateEffect(() => {

        if (visible) {
            if (beforeShow) {
                beforeShow();
            }
            gsap.set(modal.current, { display: "block" });
        }
        else {
            if (beforeHide) {
                beforeHide();
            }
        }

        gsap.to(modal.current, {
            opacity: visible ? 1 : 0,
            duration: 0.3,
            ease: Power2.easeInOut,
            onComplete: () => {
                if (visible) {
                    if (afterShow) {
                        afterShow();
                    }
                }
                else {
                    if (afterHide) {
                        afterHide();
                    }
                    gsap.set(modal.current, { display: "none" });
                }
            }
        });

    }, [visible]);

    return (
        <div ref={modal} className="modal" style={{opacity: visibleByDefault.current ? 1 : 0, display: visibleByDefault.current ? "block" : "none"}}>
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    )
}

export default Modal