import React from "react";

import classNames from "classnames";

import styles from "./FloatingText.module.scss";

export type DirectionType =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "fade-in"
  | "fade-out"
  | undefined;

type FloatTextType = {
  children: React.ReactNode;
  delay: number;
  direction: DirectionType;
  className?: string;
};

const FloatingText: React.FC<FloatTextType> = ({
  delay,
  direction,
  className,
  children,
}: FloatTextType) => {
  const floaterClasses = classNames(
    styles["text-floater"],
    styles[`text-floater-${delay}`],
    styles[`text-floater__${direction}`],
    className
  );
  return (
    <div className={styles["text-float"]}>
      <span className={floaterClasses}>{children}</span>
    </div>
  );
};

export default FloatingText;
