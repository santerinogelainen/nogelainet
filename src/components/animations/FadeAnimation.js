import React from "react"
import gsap, { Power2 } from "gsap";
import { useDidUpdateEffect } from "../../utils/reactUtils";

const FadeAnimation = ({
    speed = 400,
    visible = false,
    before = null,
    after = null,
    ...props
}) => {

    const container = React.useRef();
    const visibleByDefault = React.useRef(visible);

    useDidUpdateEffect(() => {

      if (before) {
          before();
      }

      const options = {
          duration: speed / 1000,
          opacity: visible ? 1 : 0,
          ease: Power2.easeInOut,
          onComplete: after
      };

      return gsap.to(container.current, options);

  }, [visible]);

    return (
        <span ref={container} style={{opacity: visibleByDefault.current ? 1 : 0}} className="fade-animation-container">
            {props.children}
        </span>
    );

}

export default FadeAnimation;