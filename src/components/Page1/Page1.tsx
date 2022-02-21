import React from "react";

import { v4 as uuid } from "uuid";
import CustomImage from "../CustomImage";

import p1 from "../../images/001.jpg";
import p2 from "../../images/002.jpg";
import p3 from "../../images/003.jpg";
import p4 from "../../images/004.jpg";

import { AnimationDirection, ImageType } from "../CustomImage/CustomImage";

import styles from "./Page1.module.scss";

const images: ImageType[] = [
  {
    id: uuid(),
    src: p1,
    delay: 200,
    spacing: 50,
    duration: 2000,
    direction: "down",
  },
  {
    id: uuid(),
    src: p2,
    delay: 1800,
    spacing: 50,
    duration: 2000,
    direction: "up",
  },
  {
    id: uuid(),
    src: p3,
    delay: 3400,
    spacing: 50,
    duration: 2000,
    direction: "fromLeft",
  },
  {
    id: uuid(),
    src: p4,
    delay: 5000,
    spacing: 50,
    duration: 2000,
    direction: "fromRight",
  },
];

const Page1 = () => {
  return (
    <div className={styles.page1Wrapper}>
      {images.map(image => (
        <CustomImage key={`image-${image.id}`} {...image} />
      ))}
    </div>
  );
};

export default Page1;
