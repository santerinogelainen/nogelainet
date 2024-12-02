import React from "react";
import SlideAnimation from "./animations/SlideAnimation";
import { Direction } from "../models/direction";
import { Link } from "gatsby";

type BlockButtonProps = React.PropsWithChildren<{
  text?: string;
  forceOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href?: string;
}>;

type BlockButtonContentProps = React.PropsWithChildren<{
  open: boolean;
}>;

const BlockButtonContent: React.FC<BlockButtonContentProps> = ({
  open,
  children,
}) => {
  return (
    <SlideAnimation open={open} from={Direction.Left} to={Direction.Right}>
      <div className="block-button noselect">{children}</div>
    </SlideAnimation>
  );
};

const BlockButton: React.FC<BlockButtonProps> = ({
  text,
  forceOpen,
  href,
  onClick,
  children,
}) => {
  const [slideOpen, setSlideOpen] = React.useState(forceOpen ?? false);
  const open = forceOpen !== undefined ? forceOpen : slideOpen;
  const content = (
    <BlockButtonContent open={open}>{text || children}</BlockButtonContent>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="block-button-container"
        onMouseEnter={() => setSlideOpen(true)}
        onMouseLeave={() => setSlideOpen(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className="block-button-container"
      onMouseEnter={() => setSlideOpen(true)}
      onMouseLeave={() => setSlideOpen(false)}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default BlockButton;
