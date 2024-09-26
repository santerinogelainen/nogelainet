import React, { useEffect, useRef, useState } from "react";
import { Position } from "../../models/position";

type WireframeTransform = (point: Position, mouse: Position) => void;

type WireframeBackgroundProps = {
  speed?: number;
  boxSize?: number;
  lineWidth?: number;
  circleSize?: number;
  transform?: WireframeTransform;
};

export const wireframeBall: WireframeTransform = (point, mouse) => {
  const circleSize = 400;
  const diff = new Position(mouse.x - point.x, mouse.y - point.y);
  const distance = Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
  if (Math.abs(distance) < circleSize) {
    const multiplier = (1 - distance / circleSize) * 1.25;
    point.x = point.x - multiplier * diff.x;
    point.y = point.y - multiplier * diff.y;
  }
};

export const wireframeWave: WireframeTransform = (point, mouse) => {
  const circleSize = 100;
  const diff = new Position(mouse.x - point.x, mouse.y - point.y);
  const distance = Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
  const multiplier = Math.cos(distance / circleSize) * 5;
  point.x = point.x + multiplier * (diff.x / circleSize);
  point.y = point.y + multiplier * (diff.y / circleSize);
};

const WireframeBackground: React.FC<WireframeBackgroundProps> = ({
  speed = 10,
  boxSize = 30,
  lineWidth = 1,
  circleSize = 300,
  transform = wireframeBall,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      return;
    }

    // Initialising the canvas
    const ctx = canvas.getContext("2d");
    let points: Position[][] = [];

    // Resetting the canvas
    const reset = () => {
      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = canvas.width + "px";
      canvas.style.height = canvas.height + "px";

      mousemove();
    };

    const mousemove = (e?: MouseEvent) => {
      const padding = 20;
      const half = boxSize / 2 + (padding / 2) * boxSize;
      const columns = Math.ceil(canvas.width / boxSize) + padding;
      const rows = Math.ceil(canvas.height / boxSize) + padding;
      const mouse = new Position(e?.clientX, e?.clientY);

      points = Array<Array<Position>>(columns);

      for (let x = 0; x < columns; x++) {
        points[x] = Array<Position>(rows);
        for (let y = 0; y < rows; y++) {
          const point = new Position(x * boxSize - half, y * boxSize - half);
          transform(point, mouse);
          points[x][y] = point;
        }
      }
    };

    // Setting up the draw function
    const draw = () => {
      if (!ctx || points.length === 0) {
        return;
      }
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgb(70, 70, 70)";
      ctx.lineWidth = lineWidth;
      for (let x = 0; x < points.length; x++) {
        for (let y = 0; y < points[x].length; y++) {
          const curPos = points[x][y];

          if (x + 1 < points.length) {
            const leftPos = points[x + 1]?.[y];
            ctx.beginPath();
            ctx.moveTo(curPos.x, curPos.y);
            ctx.lineTo(leftPos.x, leftPos.y);
            ctx.stroke();
          }

          if (y + 1 < points[x].length) {
            const bottomPos = points[x]?.[y + 1];
            ctx.beginPath();
            ctx.moveTo(curPos.x, curPos.y);
            ctx.lineTo(bottomPos.x, bottomPos.y);
            ctx.stroke();
          }
        }
      }
    };

    reset();

    // Loop the animation
    window.addEventListener("resize", reset);
    window.addEventListener("mousemove", mousemove);
    const interval = setInterval(draw, speed);
    return () => {
      window.removeEventListener("resize", reset);
      window.removeEventListener("mousemove", mousemove);
      clearInterval(interval);
    };
  }, [speed, boxSize, lineWidth, circleSize]);

  return <canvas ref={ref} className="background"></canvas>;
};

export default WireframeBackground;
