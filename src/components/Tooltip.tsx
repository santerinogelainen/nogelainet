import React, { useEffect, useRef } from "react";
import HiddenContainer from "./HiddenContainer";
import { Anchor } from "../models/anchor";

type TooltipProps = React.PropsWithChildren<{
  text: string;
}>;

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const content = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const currentItem = content.current;

    currentItem?.addEventListener("mouseenter", showTooltip);
    currentItem?.addEventListener("mouseleave", hideTooltip);

    return () => {
      currentItem?.removeEventListener("mouseenter", showTooltip);
      currentItem?.removeEventListener("mouseleave", hideTooltip);
    };
  }, []);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container">
      <div className="tooltip-content" ref={content}>
        {children}
      </div>
      <HiddenContainer
        zIndex={5}
        visible={visible}
        rotate={false}
        anchor={Anchor.BottomLeft}
      >
        <span className="tooltip">{text}</span>
      </HiddenContainer>
    </div>
  );
};

export default Tooltip;