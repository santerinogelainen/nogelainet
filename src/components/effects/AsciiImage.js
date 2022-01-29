import React from "react";
import IJS from "image-js";
import _ from "lodash";

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
    animate = false,
    speed = 5,
    after = null,
    ramp = AsciiImageRamp.Default
}) => {

    const [image, setImage] = React.useState(null);
    const [ascii, setAscii] = React.useState("");
    const [maxIndex, setMaxIndex] = React.useState(0);
    const [index, setIndex] = React.useState(0);
    const [result, setResult] = React.useState("");

    const loadImage = React.useCallback(async () => {

        if (!href) {
            return;
        }

        let image = await IJS.load(href);

        if (maxSize > 0) {
            image = image.resize({
                width: image.width > maxSize ? maxSize : (image.width / image.height) * maxSize,
                height: image.height > maxSize ? maxSize : (image.height / image.width) * maxSize,
            });
        }

        setImage(image);

    }, [href, maxSize]);

    const loadAscii = React.useCallback(() => {

        if (!image) {
            return;
        }
        
        const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

        const getCharacter = (grayscale) => {
            return ramp[Math.ceil(((ramp.length - 1) * grayscale) / 255)];
        }
        
        const result = [];
        
        for (var y = 0; y < image.height; y++) {

            for (var x = 0; x < image.width; x++) {

                const pixel = image.getPixelXY(x, y);
                const grayscale = toGrayScale(pixel[0], pixel[1], pixel[2]);
                result.push(getCharacter(grayscale));
            }

            result.push("\n");              
        }

        setMaxIndex(image.width + image.height);
        setAscii(result.join(""));

    }, [image, ramp]);

    const startIndex = React.useCallback(() => {

        if (animate && ascii && index < maxIndex) {

            const interval = setInterval(() => {
                setIndex(index + 1);
            }, speed);

            return () => clearInterval(interval);
        }

        if (ascii && (!animate || index == maxIndex)) {
            if (after) {
                after();
            }
        }

    }, [animate, ascii, speed, index, maxIndex]);

    const resetIndex = React.useCallback(() => setIndex(0), [animate, ascii]);

    const loadResult = React.useCallback(() => {

        if (animate && ascii && index < maxIndex) {
            
            let lines = ascii.split("\n");
            lines = _.map(lines, (line, i) => {
                let position = index - i;

                if (position >= line.length) {
                    return line;
                }

                if (position < 0) {
                    return _.repeat(" ", line.length);
                }

                const visible = line.substring(0, position);
                return visible + _.repeat(" ", line.length - visible.length);
            });

            setResult(lines.join("\n"));
        }
        else {
            setResult(ascii);
        }

    }, [animate, ascii, index, maxIndex]);

    React.useEffect(() => loadImage(), [loadImage]);
    React.useEffect(() => loadAscii(), [loadAscii]);
    React.useEffect(() => loadResult(), [loadResult]);
    React.useEffect(() => startIndex(), [startIndex]);
    React.useEffect(() => resetIndex(), [resetIndex]);

    return (
        <pre className="ascii-art">{result}</pre>
    )
}

export default AsciiImage;