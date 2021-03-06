import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com/MisterCRogers",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://www.linkedIn.com/in/mister-rogers",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://github.com/MisterC-Rogers",
    icon: <FaGithub />,
  },
];
