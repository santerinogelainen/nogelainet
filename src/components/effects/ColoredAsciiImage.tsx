import React, { useEffect, useRef } from "react";
import IJS from "image-js";
import { AsciiImageRamp } from "./AsciiImage";

// https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html

type ColoredAsciiImageProps = {
  href: string;
  maxSize?: number;
  fontSize?: number;
  ramp?: string;
  width?: number;
  height?: number;
};

const ColoredAsciiImage: React.FC<ColoredAsciiImageProps> = ({
  href,
  maxSize = 0,
  fontSize = 10,
  ramp = AsciiImageRamp.Default,
  width = 1000,
  height = 1000,
}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    loadImage();
  });

  const loadImage = async () => {
    if (!href || !canvas.current) {
      return;
    }

    const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

    const getCharacter = (grayscale) => {
      return ramp[Math.ceil(((ramp.length - 1) * grayscale) / 255)];
    };

    let image = await IJS.load(href);

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

    const ratio = window.devicePixelRatio;
    const ctx = canvas.current.getContext("2d")!;
    ctx.font = `${fontSize}px monospace`;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    canvas.current.width = width * ratio;
    canvas.current.height = height * ratio;
    canvas.current.style.width = width + "px";
    canvas.current.style.height = height + "px";
    ctx.scale(ratio, ratio);

    for (var y = 0; y < image.height; y++) {
      for (var x = 0; x < image.width; x++) {
        const pixel = image.getPixelXY(x, y);
        const grayscale = toGrayScale(pixel[0], pixel[1], pixel[2]);
        const char = getCharacter(grayscale);

        ctx.fillStyle = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        ctx.fillText(char, x * (fontSize / 1.5), y * fontSize);
      }
    }
  };

  return <canvas ref={canvas}></canvas>;
};

export default ColoredAsciiImage;
