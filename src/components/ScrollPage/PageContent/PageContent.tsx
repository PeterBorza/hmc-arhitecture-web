import { FC, useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { PagesType } from "../ScrollPage";

import classNames from "classnames";
import styles from "../ScrollPage.module.scss";

const PageContent: FC<PagesType> = ({ id, label, content }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
  });
  const isVisible = !!entry?.isIntersecting;

  const classes = classNames(styles["content-styles"], {
    [styles["content-styles__visible"]]: isVisible,
  });

  return (
    <article ref={ref} key={id} className={styles.article} id={label}>
      <span className={classes}>{content}</span>
    </article>
  );
};

export default PageContent;
