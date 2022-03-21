import { FC } from "react";
import { Link as NavigationLink } from "react-router-dom";

import { LinkDataTypes } from "../../../app/context";

const NavLink: FC<Pick<LinkDataTypes, "to" | "label">> = ({ to, label }) => {
  return (
    <li>
      <NavigationLink to={to}>{label}</NavigationLink>
    </li>
  );
};

export default NavLink;
