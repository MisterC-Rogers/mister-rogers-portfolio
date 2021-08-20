import React from "react";
import { FaPhone } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";

import Styles from "./contact.module.css";

const index = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.headerText}>
          <h2>Get In Touch</h2>
          <h5>
            Want to get in touch? I'd love to hear from you. Here's how you can
            reach me...
          </h5>
        </div>
        <div className={Styles.headerImage}></div>
      </div>
      <div className={Styles.cards}>
        <div className={Styles.card}>
          <FaPhone className={Styles.icon} />
          <h3> Call Me </h3>
          <p>To inquire information about what I am up to or just to chat...</p>
          <a href="tel:14054341192" className={Styles.last}>
            +1 405 434-1192
          </a>
        </div>
        <div className={Styles.card}>
          <BsFillChatFill className={Styles.icon} />
          <h3>Email Me</h3>
          <p>If you have a job opportunity or need a free consultation</p>
          <a href="mailto:charlie@thebitlion.com" className={Styles.last}>
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
