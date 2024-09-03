import React, { useCallback, useEffect, useRef } from "react";
import AsciiImage, { AsciiImageRamp } from "./AsciiImage";
import gsap, { Power2 } from "gsap";

type WrittenImageProps = {
  src: string;
  maxSize?: number;
  speed?: number;
  afterText?: () => void;
  afterImage?: () => void;
};

const WrittenImage: React.FC<WrittenImageProps> = ({
  src,
  maxSize = 100,
  speed = 400,
  afterText,
  afterImage,
}) => {
  const img = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const currentImage = img.current;
    const currentContainer = container.current;

    window.addEventListener("resize", () =>
      resizeImage(currentImage, currentContainer),
    );
    return () =>
      window.removeEventListener("resize", () =>
        resizeImage(currentImage, currentContainer),
      );
  });

  const resizeImage = (currentImage, currentContainer) => {
    if (currentImage && currentContainer) {
      gsap.set(currentImage, {
        width: currentContainer.offsetWidth,
        height: currentContainer.offsetHeight,
      });
    }
  };

  const showImage = useCallback(() => {
    setTimeout(() => {
      if (afterText) {
        afterText();
      }

      if (img.current && container.current) {
        resizeImage(img.current, container.current);

        gsap.to(img.current, {
          opacity: 1,
          duration: speed / 1000,
          ease: Power2.easeInOut,
          onComplete: afterImage,
        });
      }
    }, speed / 2);
  }, []);

  return (
    <div ref={container} className="written-image-container">
      <img
        ref={img}
        src={src}
        className="written-image"
        style={{ opacity: 0, width: "1px", height: "1px" }}
      />
      <AsciiImage
        speed={6}
        src={src}
        ramp={AsciiImageRamp.Simple}
        animate={true}
        maxSize={maxSize}
        after={showImage}
      />
    </div>
  );
};

export default WrittenImage;
