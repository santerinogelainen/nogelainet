import React from "react";
import { SocialMedia } from "../types";
import Tooltip from "./Tooltip";

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
  return (
    <div className="social-item-container">
      <Tooltip text={social.username}>
        <a
          className="social-item"
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          href={social.url}
        >
          {social.name}
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialMediaList;
