import { FC, useContext } from "react";
import NavLink from "./NavLink";
import { LinkContext } from "../../app/context";
import logo from "../../images/004.png";

import styles from "./Navigation.module.scss";

const Navigation: FC = ({ children }) => {
  const links = useContext(LinkContext);
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img className={styles.logoPic} src={logo} alt="logo" />
        </div>
        <ul>
          {links?.links.map(item => (
            <NavLink key={`nav-link-${item.id}`} {...item} />
          ))}
        </ul>
      </div>
      {children}
      <div className={styles.footerNav}></div>
    </>
  );
};

export default Navigation;
