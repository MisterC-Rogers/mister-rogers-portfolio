import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./NavLogo.png";

import Styles from "./Nav.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className={Styles.nav}>
      <div className={Styles.nav_center}>
        <div className={Styles.nav_header}>
          <Link to="/">
            <img src={logo} className={Styles.logo} alt="logo" />
          </Link>
          <button className={Styles.nav_toggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={Styles.links_container} ref={linksContainerRef}>
          <ul className={Styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={toggleLinks}>
                    {" "}
                    {text}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={Styles.social_icons}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
