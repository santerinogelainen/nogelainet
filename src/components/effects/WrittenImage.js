import React from "react";
import AsciiImage, { AsciiImageRamp } from "./AsciiImage";
import gsap, { Power2 } from "gsap";

const WrittenImage = ({
    src = "",
    maxSize = 100,
    speed = 400
}) => {

    const img = React.useRef(null);
    const container = React.useRef(null);

    const showImage = React.useCallback(() => {

        setTimeout(() => {

            if (img.current && container.current) {

                gsap.set(img.current, {
                    width: container.current.offsetWidth,
                    height: container.current.offsetHeight
                });
        
                gsap.to(img.current, {
                    opacity: 1,
                    duration: speed / 1000,
                    ease: Power2.easeInOut
                });
            }

        }, speed / 2);

    });

    return (
        <div ref={container} className="written-image-container">
            <img ref={img} src={src} alt="image" className="written-image" style={{opacity: 0, width: "1px", height: "1px"}} />
            <AsciiImage speed={6} src={src} ramp={AsciiImageRamp.Simple} animate={true} maxSize={maxSize} after={showImage} />
        </div>
    )
}

export default WrittenImage;