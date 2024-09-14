import React, { useEffect, useRef } from "react";

type HackerBackgroundProps = {
  speed?: number;
  letters?: string;
  randomizeStart?: boolean;
};

// https://codepen.io/yaclive/pen/EayLYO

const HackerBackground: React.FC<HackerBackgroundProps> = ({
  speed = 33,
  letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ",
  randomizeStart,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      return;
    }

    // Initialising the canvas
    const ctx = canvas.getContext("2d");
    const drops: number[] = [];
    const fontSize = 10;

    // Resetting the canvas
    const reset = () => {
      // Clear drops
      drops.length = 0;

      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Setting up the columns
      const columns = canvas.width / fontSize;

      for (let i = 0; i < columns; i++) {
        drops[i] = randomizeStart
          ? Math.floor(Math.random() * (canvas.height / fontSize))
          : 1;
      }
    };

    // Setting up the draw function
    const draw = () => {
      if (!ctx || drops.length === 0) {
        return;
      }
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const rgba = [23, 150, 23, 1 - Math.min(y / canvas.height, 1)];
        ctx.fillStyle = `rgba(${rgba.join(",")})`;
        ctx.fillText(text, x, y);
        drops[i]++;
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    reset();

    // Loop the animation
    window.addEventListener("resize", reset);
    const interval = setInterval(draw, speed);
    return () => {
      window.removeEventListener("resize", reset);
      clearInterval(interval);
    };
  }, [speed, letters, randomizeStart]);

  return <canvas ref={ref} className="background"></canvas>;
};

export default HackerBackground;
