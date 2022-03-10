import { FC, useRef } from "react";
import { v4 as uuid } from "uuid";

import { NavHashLink } from "react-router-hash-link";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import styles from "./ScrollPage.module.scss";
import PageContent from "./PageContent";

export interface PagesType {
  id: string;
  label: string | undefined;
  content: JSX.Element;
}

export interface ScrollProps {
  pages?: PagesType[];
}

const mockPages = ["page 1", "page 2", "page 3", "page 4", "page 5"];

const articles: PagesType[] = mockPages.map(page => ({
  id: uuid(),
  label: page,
  content: (
    <div className={styles.article__default}>
      <h1>{page}</h1>
    </div>
  ),
}));

const ScrollPage: FC<ScrollProps> = ({ pages = articles }) => {
  // const ref = useRef<HTMLDivElement | null>(null);
  // const entry = useIntersectionObserver(ref, {});
  // const isVisible = !!entry?.isIntersecting;

  return (
    <section className={styles.section}>
      <aside className={styles["aside-navigation"]}>
        <ul className={styles["link-shell"]}>
          {pages.map(link => (
            <li key={link.id}>
              <NavHashLink to={`#${link.label}`}>{link.label}</NavHashLink>
            </li>
          ))}
          <li>
            <NavHashLink to={`#top`}>scroll to top</NavHashLink>
          </li>
        </ul>
      </aside>
      {pages.map(link => (
        <PageContent key={`page-content-${link.id}`} {...link} />
      ))}
    </section>
  );
};

export default ScrollPage;
