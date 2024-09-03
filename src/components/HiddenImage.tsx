import React, { useCallback, useState } from "react";
import HiddenContainer from "./HiddenContainer";

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

  const nextImage = useCallback(() => {
    const newIndex = index + 1;
    setIndex(newIndex >= images.length ? 0 : newIndex);
  }, [index, images]);

  return (
    <HiddenContainer enabled={enabled} visible={visible} onHide={nextImage}>
      <img
        className="hidden-image"
        src={images[index]}
        style={{ zIndex: -2 }}
        alt="hidden"
      />
    </HiddenContainer>
  );
};

export default HiddenImage;
