import React from "react";
import { Direction } from "../../models/direction";
import gsap, { Power3 } from "gsap";
import { useDidUpdateEffect } from "../../utils/reactUtils";

const SlideAnimation = ({ 
    open = false, 
    speed = 400,
    from = Direction.Left, 
    to = Direction.Right,
    before = null, 
    after = null, 
    ...props }) => {

    const bg = React.useRef();
    const container = React.useRef();
    const openByDefault = React.useRef(open);
    const anim = React.useRef(null);
    const insetOpen = React.useRef("inset(0% 0% 0% 0%)");

    const animateInset = React.useCallback((target, clipPath) => {

        if (before) {
            before();
        }

        const options = {
            duration: speed / 1000,
            ease: Power3.easeInOut,
            clipPath: clipPath,
            onComplete: after
        };

        return gsap.to(target, options);
    }, [before, after, speed]);

    const getInset = React.useCallback((direction) => {

        switch (direction) {

            case Direction.Top:
                return "inset(0% 0% 100% 0%)";

            case Direction.Left:
                return "inset(0% 100% 0% 0%)";

            case Direction.Bottom:
                return "inset(100% 0% 0% 0%)";

            case Direction.Right:
            default:
                return "inset(0% 0% 0% 100%)";
        }

    }, []);

    const setInset = React.useCallback((target, clipPath) => {
        const options = {
            clipPath: clipPath
        };
        gsap.set(target, options);
    }, []);
    
    const fromInset = React.useMemo(() => getInset(from), [from, getInset]);
    const toInset = React.useMemo(() => getInset(to), [to, getInset]);

    useDidUpdateEffect(() => {

        if (anim.current && anim.current.isActive()) {
            anim.current.then(() => {
                setInset(bg.current, open ? fromInset : insetOpen.current);
                anim.current = animateInset(bg.current, open ? insetOpen.current : toInset);
            });
        }
        else {
            setInset(bg.current, open ? fromInset : insetOpen.current);
            anim.current = animateInset(bg.current, open ? insetOpen.current : toInset);
        }

    }, [open]);

    useDidUpdateEffect(() => {
        if (anim.current && anim.current.vars && anim.current.isActive()) {
            anim.current.vars.onComplete = after;
        }
    }, [after]);

    return (
        <span ref={container} className="slide-animation-container">
            <span ref={bg} className="slide-animation-bg" style={{ zIndex: 1, clipPath: openByDefault.current ? insetOpen.current : fromInset }}>
                {props.children}
            </span>
            <span className="slide-animation-content" style={{ zIndex: 0 }}>
                {props.children}
            </span>
        </span>
    );

}

export default SlideAnimation;