import React, { useCallback, useEffect, useState } from "react";
import IJS from "image-js";

// https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html

export const AsciiImageRamp = {
  Default:
    "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ",
  Simple: "@%#*+=-:. ",
  Block: "█▓▒░ ",
};

export type AsciiImageProps = {
  src: string;
  maxSize?: number;
  animate?: boolean;
  speed?: number;
  after?: () => void;
  ramp?: string;
};

const AsciiImage: React.FC<AsciiImageProps> = ({
  src = "",
  maxSize = 0,
  animate = false,
  speed = 5,
  after = null,
  ramp = AsciiImageRamp.Default,
}) => {
  const [image, setImage] = useState<IJS | null>(null);
  const [ascii, setAscii] = useState("");
  const [maxIndex, setMaxIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");

  const loadImage = useCallback(async () => {
    if (!src) {
      return;
    }

    let image = await IJS.load(src);

    if (maxSize > 0) {
      image = image.resize({
        width:
          image.width > maxSize
            ? maxSize
            : (image.width / image.height) * maxSize,
        height:
          image.height > maxSize
            ? maxSize
            : (image.height / image.width) * maxSize,
      });
    }

    setImage(image);
  }, [src, maxSize]);

  const loadAscii = React.useCallback(() => {
    if (!image) {
      return;
    }

    const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

    const getCharacter = (grayscale) => {
      return ramp[Math.ceil(((ramp.length - 1) * grayscale) / 255)];
    };

    const result: string[] = [];

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

    if (ascii && (!animate || index === maxIndex)) {
      if (after) {
        after();
      }
    }
  }, [animate, ascii, speed, index, maxIndex]);

  const resetIndex = React.useCallback(() => setIndex(0), [animate, ascii]);

  const loadResult = React.useCallback(() => {
    if (animate && ascii && index < maxIndex) {
      let lines = ascii.split("\n");
      lines = lines.map((line, i) => {
        let position = index - i;

        if (position >= line.length) {
          return line;
        }

        if (position < 0) {
          return " ".repeat(line.length);
        }

        const visible = line.substring(0, position);
        return visible + " ".repeat(line.length - visible.length);
      });

      setResult(lines.join("\n"));
    } else {
      setResult(ascii);
    }
  }, [animate, ascii, index, maxIndex]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);
  useEffect(() => loadAscii(), [loadAscii]);
  useEffect(() => loadResult(), [loadResult]);
  useEffect(() => startIndex(), [startIndex]);
  useEffect(() => resetIndex(), [resetIndex]);

  return <pre className="ascii-art">{result}</pre>;
};

export default AsciiImage;
