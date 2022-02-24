
import React from "react";
import HiddenContainer from "./HiddenContainer";

const HiddenImage = ({
    visible = false,
    enabled = true,
    images = []
}) => {

    const [index, setIndex] = React.useState(0);

    const nextImage = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    }
    
    return (
        <HiddenContainer enabled={enabled} visible={visible} onHide={nextImage}>
            <img className="hidden-image" src={images[index]} style={{ zIndex: -2 }} />
        </HiddenContainer>
    )
}

export default HiddenImage;