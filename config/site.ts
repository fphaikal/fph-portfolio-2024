export type SiteConfig = typeof siteConfig;
import { GoHomeFill, GoHome } from "react-icons/go";
import {
  RiBookletFill,
  RiBookletLine,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import { AiFillSpotify, AiOutlineSpotify } from "react-icons/ai";

export const siteConfig = {
  name: "Fahreza Pasha Haikal",
  description: "I'm a vocational high school student interning in mechatronics, with expertise in full-stack development. Passionate about programming.",
  navItems: [
    {
      label: "Home",
      icon: GoHomeFill,
      activeIcon: GoHome,
      href: "/",
    },
    {
      label: "Blog",
      icon: RiBookletFill,
      activeIcon: RiBookletLine,
      href: "/blog",
    },
    {
      label: "Spotify",
      icon: AiFillSpotify,
      activeIcon: AiOutlineSpotify,
      href: "/spotify",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: [
    {
      label: "Instagram",
      href: "https://instagram.com/fp_haikal",
      icon: RiInstagramFill,
    },
    {
      label: "GitHub",
      href: "https://github.com/fphaikal",
      icon: RiGithubFill,
    },
  ],
};
