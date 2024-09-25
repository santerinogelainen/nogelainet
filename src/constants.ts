import { SocialMedia } from "./types";

export const settings = {
  first_name: "Santeri",
  last_name: "Nogelainen",
  full_name: () => `${settings.first_name} ${settings.last_name}`,
  email: "santeri@nogelai.net",
};

export const socials: Array<SocialMedia> = [
  {
    key: "LinkedIn",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/santerinogelainen/",
    username: "santerinogelainen",
  },
  {
    key: "GitHub",
    name: "GitHub",
    url: "https://github.com/santerinogelainen",
    username: "santerinogelainen",
  },
  {
    key: "Instagram",
    name: "Instagram",
    url: "https://www.instagram.com/santerinogelainen/",
    username: "santerinogelainen",
  },
  {
    key: "Discord",
    name: "Discord",
    url: "https://discord.com/users/211860254646861824",
    username: "noge#nogee",
  },
];
