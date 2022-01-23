import React from "react";
import IJS from "image-js";

// https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html

export const AsciiImageRamp = {
    Default: "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ",
    Simple: "@%#*+=-:. ",
    Block: "█▓▒░ "
}

export const AsciiImageRampSBArgs = {
    options: AsciiImageRamp,
    mapping: AsciiImageRamp,
    control: {
        type: 'select'
    },
}

const AsciiImage = ({
    href = "",
    maxSize = 0,
    ramp = AsciiImageRamp.Default
}) => {

    const [ascii, setAscii] = React.useState("");
    React.useEffect(() => loadImage());

    const loadImage = async () => {

        if (!href) {
            return;
        }
        
        const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

        const getCharacter = (grayscale) => {
            return ramp[Math.ceil(((ramp.length - 1) * grayscale) / 255)];
        }

        let image = await IJS.load(href);
        const result = [];

        if (maxSize > 0) {
            image = image.resize({
                width: image.width > maxSize ? maxSize : (image.width / image.height) * maxSize,
                height: image.height > maxSize ? maxSize : (image.height / image.width) * maxSize,
            });
        }

        for (var y = 0; y < image.height; y++) {

            for (var x = 0; x < image.width; x++) {

                const pixel = image.getPixelXY(x, y);
                const grayscale = toGrayScale(pixel[0], pixel[1], pixel[2]);
                result.push(getCharacter(grayscale));
            }

            result.push("\n");              
        }

        setAscii(result.join(""));

    };

    return (
        <pre className="ascii-art">{ascii}</pre>
    )
}

export default AsciiImage;