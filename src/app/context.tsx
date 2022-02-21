import { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";

import hmc from "../images/HMC4000X6000.jpg";
import logo1 from "../images/004.png";
import logo2 from "../images/003.png";

import { PagesType } from "../components/ScrollPage/ScrollPage";

export interface LinkDataTypes {
  id: string;
  to: string;
  label: string;
}

export type ContextType = {
  links: LinkDataTypes[];
  page2Content: PagesType[];
};

export const LinkContext = createContext<ContextType | null>(null);

export const LinkContextProvider = ({ children }: { children: ReactNode }) => {
  const links: LinkDataTypes[] = [
    { id: uuid(), to: "/", label: "Home" },
    {
      id: uuid(),
      to: "page1",
      label: "sliders",
    },
    {
      id: uuid(),
      to: "page2",
      label: "scrollers",
    },
  ];

  const page2Content: PagesType[] = [
    {
      id: uuid(),
      label: "HMC",
      content: <img src={hmc} alt="Horia" />,
    },
    {
      id: uuid(),
      label: "LOGO-1",
      content: <img src={logo1} alt="logo1" />,
    },
    {
      id: uuid(),
      label: "LOGO-2",
      content: <img src={logo2} alt="logo2" />,
    },
  ];
  return (
    <LinkContext.Provider value={{ links, page2Content }}>
      {children}
    </LinkContext.Provider>
  );
};
