import React, { useEffect, useRef } from "react";
import HiddenContainer from "./HiddenContainer";
import { Anchor } from "../models/anchor";
import _ from "lodash";
import { SocialMedia } from "../types";

type SocialMediaListProps = {
  socials: Array<SocialMedia>;
};

type SocialMediaItemProps = {
  social: SocialMedia;
};

const SocialMediaList: React.FC<SocialMediaListProps> = ({ socials }) => {
  return (
    <div className="socials">
      {socials.map((social) => {
        return <SocialMediaItem key={social.key} social={social} />;
      })}
    </div>
  );
};

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ social }) => {
  const item = useRef<HTMLAnchorElement | null>(null);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  useEffect(() => {
    const currentItem = item.current;

    currentItem?.addEventListener("mouseenter", showTooltip);
    currentItem?.addEventListener("mouseleave", hideTooltip);

    return () => {
      currentItem?.removeEventListener("mouseenter", showTooltip);
      currentItem?.removeEventListener("mouseleave", hideTooltip);
    };
  }, []);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return (
    <div className="social-item-container">
      <a
        ref={item}
        className="social-item"
        target="_blank"
        rel="noreferrer"
        aria-label={social.name}
        href={social.url}
      >
        {social.name}
      </a>
      <HiddenContainer
        zIndex={5}
        visible={tooltipVisible}
        rotate={false}
        anchor={Anchor.BottomLeft}
      >
        <span className="target-blank social-tooltip">{social.username}</span>
      </HiddenContainer>
    </div>
  );
};

export default SocialMediaList;
