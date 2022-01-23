import React from "react";
import { Anchor } from "../../models/anchor";
import { Plane } from "../../models/plane";
import gsap, { Power3 } from "gsap";

const LineAnimation = ({
    visible = false,
    speed = 600,
    anchor1 = Anchor.TopLeft,
    anchor2 = Anchor.BottomRight,
    after = null,
    ...props}) => {

    const left = React.useRef();
    const right = React.useRef();
    const top = React.useRef();
    const bottom = React.useRef();

    React.useEffect(() => {

        if (visible) {
            animateLines("100%");
        }
        else {
            animateLines("0");
        }
    });

    const animateLines = (size) => {

        animateLine(left.current, anchor1, Plane.Vertical, size, after);
        animateLine(top.current, anchor1, Plane.Horizontal, size);
        animateLine(right.current, anchor2, Plane.Vertical, size);
        animateLine(bottom.current, anchor2, Plane.Horizontal, size);
    }

    const animateLine = (line, anchor, plane, size, onComplete) => {

        setPosition(line, anchor);

        const options = {
            duration: speed / 1000,
            ease: Power3.easeInOut,
            onComplete: onComplete
        };

        switch (plane) {

            case Plane.Vertical:
                options.height = size;
                break;

            case Plane.Horizontal:
                options.width = size;
                break;
        }

        gsap.to(line, options);
    }


    const setPosition = (line, anchor) => {

        switch (anchor) {
            case Anchor.TopLeft:
                gsap.set(line, { top: 0, left: 0, clearProps: "bottom,right" });
                break;
                
            case Anchor.TopRight:
                gsap.set(line, { top: 0, right: 0, clearProps: "bottom,left" });
                break;

            case Anchor.BottomLeft:
                gsap.set(line, { bottom: 0, left: 0, clearProps: "top,right" });
                break;

            case Anchor.BottomRight:
                gsap.set(line, { bottom: 0, right: 0, clearProps: "top,left" });
                break;
        }
    }

    return (
        <div className="line-animation">
            <span className="line line-left" ref={left} />
            <span className="line line-right" ref={right} />
            <span className="line line-top" ref={top} />
            <span className="line line-bottom" ref={bottom} />
            {props.children}
        </div>
    )

}

export default LineAnimation;