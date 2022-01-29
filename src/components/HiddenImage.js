
import React from "react";
import HiddenContainer from "./HiddenContainer";

const HiddenImage = ({
    visible = false,
    images = []
}) => {

    const [index, setIndex] = React.useState(0);

    const nextImage = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    }
    
    return (
        <HiddenContainer visible={visible} onHide={nextImage}>
            <img className="hidden-image" alt="Hidden image" src={images[index]} style={{ zIndex: -2 }} />
        </HiddenContainer>
    )
}

export default HiddenImage;