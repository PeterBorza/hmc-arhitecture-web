import { FC } from "react";
import { NavLink as NavigationLink } from "react-router-dom";

import { LinkDataTypes } from "../../../app/context";

const NavLink: FC<Pick<LinkDataTypes, "to" | "label">> = ({ to, label }) => {
  return (
    <li>
      <NavigationLink to={to}>{label}</NavigationLink>
    </li>
  );
};

export default NavLink;
