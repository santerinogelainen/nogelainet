import React, { useCallback, useEffect, useRef, useState } from "react";
import HiddenContainer from "./HiddenContainer";
import gsap, { Back } from "gsap";

type HiddenImageProps = {
  visible: boolean;
  enabled: boolean;
  images: Array<string>;
};

const HiddenImage: React.FC<HiddenImageProps> = ({
  visible,
  enabled,
  images,
}) => {
  const [index, setIndex] = useState(0);
  const [clicking, setClicking] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  const shouldBeVisible = clicking || visible;
  const className = `hidden-image ${clicking ? "hidden-image-grab" : ""}`;

  const nextImage = useCallback(() => {
    const newIndex = index + 1;
    setIndex(newIndex >= images.length ? 0 : newIndex);
  }, [index, images]);

  useEffect(() => {
    if (shouldBeVisible && enabled) {
      const mousedown = () => {
        if (!img.current) {
          return;
        }
        setClicking(true);
        gsap.to(img.current, {
          scale: 1.1,
          duration: 0.3,
          ease: Back.easeOut.config(3),
        });
      };

      const mouseup = () => {
        if (!img.current) {
          return;
        }
        setClicking(false);
        gsap.to(img.current, {
          scale: 1,
          duration: 0.3,
          ease: Back.easeOut.config(3),
        });
      };

      window.addEventListener("mousedown", mousedown);
      window.addEventListener("mouseup", mouseup);

      return () => {
        window.removeEventListener("mousedown", mousedown);
        window.removeEventListener("mouseup", mouseup);
      };
    }
  }, [enabled, shouldBeVisible]);

  return (
    <HiddenContainer
      enabled={enabled}
      visible={shouldBeVisible}
      onHide={nextImage}
    >
      <img ref={img} className={className} src={images[index]} alt="hidden" />
    </HiddenContainer>
  );
};

export default HiddenImage;
