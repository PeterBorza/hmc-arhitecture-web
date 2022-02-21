import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LinkContext } from "../../app/context";
import logo from "../../images/004.png";

import styles from "./Navigation.module.scss";

const Navigation: FC = ({ children }) => {
  const links = useContext(LinkContext);
  const renderNavLinks = () => {
    return links?.links.map(item => (
      <li key={`link-${item.id}`}>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "white" }
          }
          to={item.to}
        >
          {item.label}
        </NavLink>
      </li>
    ));
  };
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img className={styles.logoPic} src={logo} alt="logo" />
        </div>
        <ul>{renderNavLinks()}</ul>
      </div>
      {children}
      <div className={styles.footerNav}></div>
    </>
  );
};

export default Navigation;
