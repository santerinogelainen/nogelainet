import React from "react";
import SlideAnimation from "./animations/SlideAnimation";
import { Direction } from "../models/direction";

type BlockButtonProps = React.PropsWithChildren<{
  text: string;
  forceOpen?: boolean;
  onClick?: () => void;
}>;

const BlockButton: React.FC<BlockButtonProps> = ({
  text,
  forceOpen,
  onClick,
  children,
}) => {
  const [slideOpen, setSlideOpen] = React.useState(forceOpen || false);

  return (
    <div
      className="block-button-container"
      onMouseEnter={() => setSlideOpen(true)}
      onMouseLeave={() => setSlideOpen(false)}
      onClick={onClick}
    >
      <SlideAnimation
        open={forceOpen !== null ? forceOpen : slideOpen}
        from={Direction.Left}
        to={Direction.Right}
      >
        <div className="block-button noselect">{text || children}</div>
      </SlideAnimation>
    </div>
  );
};

export default BlockButton;
