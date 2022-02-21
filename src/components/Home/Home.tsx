import React from "react";
import CustomImage from "../CustomImage";
import styles from "./Home.module.scss";
import p1 from "../../images/001.jpg";
import p2 from "../../images/002.jpg";
import p3 from "../../images/003.jpg";
import p4 from "../../images/004.jpg";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <CustomImage
        src={p1}
        delay={200}
        spacing={50}
        duration={2000}
        direction="down"
      />
      <CustomImage
        src={p2}
        delay={1800}
        spacing={50}
        duration={2000}
        direction="up"
      />
      <CustomImage
        src={p3}
        delay={3400}
        spacing={50}
        duration={2000}
        direction="fromLeft"
      />
      <CustomImage
        src={p4}
        delay={5000}
        spacing={50}
        duration={2000}
        direction="fromRight"
      />
    </div>
  );
};

export default Home;
