import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// Card-level variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      className={styles.container}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.08,
        y: -6,
        boxShadow: "0 25px 40px rgba(0,0,0,0.55), 0 0 25px #6d9eff",
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, i) => (
          <motion.li
            key={i}
            className={styles.skill}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className={styles.links}>
        <motion.a
          href={demo}
          className={styles.link}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Demo
        </motion.a>
        <motion.a
          href={source}
          className={styles.link}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Source
        </motion.a>
      </div>
    </motion.div>
  );
};
