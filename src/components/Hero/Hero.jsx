import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import avatar from "../../assets/avatar.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohit Saran</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3.5 years of experience in both front-end and back-end development, with expertise in HTML, CSS, JavaScript, React, Node.js, and RESTful APIs.<br/> Reach out if you'd like to know more!
        </p>
        <a href="mailto:mohitsarancorp@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src={avatar}
        
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
