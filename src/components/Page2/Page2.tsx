import React, { useContext } from "react";

import ScrollPage from "../ScrollPage";
import { LinkContext } from "../../app/context";

import styles from "./Page2.module.scss";

const Page2 = () => {
  const links = useContext(LinkContext);
  return (
    <div className={styles.page2Wrapper}>
      <ScrollPage pages={links?.page2Content} />
    </div>
  );
};

export default Page2;
