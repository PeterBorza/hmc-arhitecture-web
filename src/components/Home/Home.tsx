import React from "react";

import logo1 from "../../images/005.png";
import halaalbnegru from "../../images/halaalbnegru.jpg";
import FloatingImage from "../../reusable-components/FloatingImage";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <FloatingImage src={halaalbnegru}>
        <img className={styles.homePhoto} src={logo1} alt="logo water-mark" />
      </FloatingImage>
    </>
  );
};

export default Home;
