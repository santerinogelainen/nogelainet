
import React from "react";
import { Position } from "../../models/position";
import gsap from "gsap";
import { Anchor } from "../../models/anchor";

const MouseFollowingContainer = ({
    enabled = true, 
    rotate = true, 
    anchor = Anchor.Center, 
    ease = 0.05, 
    zIndex = 0, 
    ...props}) => {

    const div = React.useRef();
    const state = React.useRef({
        pos: new Position(),
        rot: new Position(),
        mouse: new Position()
    });

    const update = React.useCallback(() => {

        if (!div.current) {
            return;
        }

        const current = state.current;

        current.pos.x = current.pos.x + (current.mouse.x - current.pos.x) * ease;
        current.pos.y = current.pos.y + (current.mouse.y - current.pos.y) * ease;

        if (rotate) {
            current.rot.x = ((current.mouse.y - current.pos.y) / (div.current?.offsetWidth ?? 1)) * 100;
            current.rot.y = ((current.mouse.x - current.pos.x) / (div.current?.offsetHeight ?? 1)) * 100;

            if (current.rot.x < 0) {
                current.rot.y = -current.rot.y;
            }
        }

        gsap.set(div.current, {
            top: current.pos.y,
            left: current.pos.x,
            transform: `rotateX(${current.rot.x}deg) rotateY(${current.rot.y}deg)`
        });
        
        state.current = current;

    }, [rotate, ease]);

    const updateMousePosition = React.useCallback((event) => {

        state.current.mouse.x = event.clientX;
        state.current.mouse.y = event.clientY;

        if (!div.current) {
            return;
        }

        switch (anchor) {

            case Anchor.TopRight:
                state.current.mouse.x -= div.current.offsetWidth;
                break;

            case Anchor.BottomLeft:
                state.current.mouse.y -= div.current.offsetHeight;
                break;

            case Anchor.BottomRight:
                state.current.mouse.x -= div.current.offsetWidth;
                state.current.mouse.y -= div.current.offsetHeight;
                break;

            case Anchor.Center:
                state.current.mouse.x -= div.current.offsetWidth / 2;
                state.current.mouse.y -= div.current.offsetHeight / 2;
                break;
        }
    }, []);

    React.useEffect(() => {

        if (enabled) {

            document.addEventListener("mousemove", updateMousePosition);
            gsap.ticker.add(update);
    
            return () => {
                document.removeEventListener("mousemove", updateMousePosition);
                gsap.ticker.remove(update);
            }

        }

    }, [enabled, update, updateMousePosition]);

    return (<div
        ref={div}
        className="mouse-following-container"
        style={{
            zIndex: zIndex
        }}>
        {props.children}
    </div>)

}

export default MouseFollowingContainer;