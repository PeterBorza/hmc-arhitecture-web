import React from "react";

import logo from "../../images/005-removebg-preview.png";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.homePhoto} src={logo} alt="logo water-mark" />
      </div>
    </div>
  );
};

export default Home;
