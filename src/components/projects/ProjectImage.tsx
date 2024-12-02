import React, { useCallback, useEffect, useRef, useState } from "react";

type ProjectImageProps = {
  src: string;
  speed?: number;
};

const characterWidth = 16;
const characterHeight = 16;

const ProjectImage: React.FC<ProjectImageProps> = ({ src, speed = 15 }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const image = useRef(new Image());

  useEffect(() => {
    let box = 0;
    let interval: any = undefined;

    const animate = () => {
      const ctx = canvas.current?.getContext("2d");
      if (!ctx || !canvas.current) {
        return;
      }

      // Resize canvas
      canvas.current.width = canvas.current.offsetWidth;
      canvas.current.height = canvas.current.offsetHeight;

      // Render image
      const widthRatio = canvas.current.width / image.current.naturalWidth;
      const heightRatio = canvas.current.height / image.current.naturalHeight;
      const ratio = Math.max(widthRatio, heightRatio);
      const imgX =
        (canvas.current.width - image.current.naturalWidth * ratio) / 2;
      const imgY =
        (canvas.current.height - image.current.naturalHeight * ratio) / 2;
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.drawImage(
        image.current,
        imgX,
        imgY,
        image.current.naturalWidth * ratio,
        image.current.naturalHeight * ratio,
      );

      // Clear boxes
      const wBoxes = Math.ceil(canvas.current.offsetWidth / characterWidth);
      const hBoxes = Math.ceil(canvas.current.offsetHeight / characterHeight);
      ctx.fillStyle = "#f2efe9";

      for (let y = 0; y < hBoxes; y++) {
        const boxX = (box - y) * characterWidth;
        const boxY = y * characterHeight;

        ctx.clearRect(
          boxX,
          boxY,
          canvas.current.offsetWidth * 2,
          characterHeight,
        );

        for (let s = 0; s < 5; s++) {
          ctx.fillRect(
            boxX + characterWidth * s,
            boxY,
            characterWidth,
            characterHeight,
          );
        }
      }

      if (box > wBoxes + hBoxes) {
        clearInterval(interval);
      }

      box++;
    };

    const reset = () => {
      const ctx = canvas.current?.getContext("2d");
      if (!ctx || !canvas.current) {
        return;
      }

      // Resize canvas
      canvas.current.width = canvas.current.offsetWidth;
      canvas.current.height = canvas.current.offsetHeight;

      // Start anim
      box = 0;
      interval = setInterval(animate, speed);
    };

    image.current.addEventListener("load", reset);
    window.addEventListener("resize", animate);
    image.current.src = src;
    return () => {
      image.current.removeEventListener("load", reset);
      window.removeEventListener("resize", animate);
      clearInterval(interval);
    };
  }, [src, speed]);

  return <canvas ref={canvas} className="project-image" />;
};

export default ProjectImage;
