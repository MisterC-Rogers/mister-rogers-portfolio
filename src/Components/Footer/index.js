import React from "react";
import Styles from "./footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className={Styles.FooterComponent}>
      <div className={Styles.social}>
        <a
          href="https://twitter.com/MisterCRogers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/charles-a-rogers-sr-823636102"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MisterC-Rogers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className={Styles.copyright}>© 2021 Charlie Rogers</div>
    </div>
  );
}

export default Footer;
