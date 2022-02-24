import { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";

import hmc from "../images/HMC4000X6000.jpg";
import logo1 from "../images/001.png";
import logo2 from "../images/002.png";
import logo3 from "../images/003.png";
import logo4 from "../images/004.png";
import logo5 from "../images/005.png";
import p1 from "../images/001.jpg";
import p2 from "../images/002.jpg";
import p3 from "../images/003.jpg";
import p4 from "../images/004.jpg";
import p5 from "../images/005.jpg";

import { PagesType } from "../components/ScrollPage/ScrollPage";
import { ImageType } from "../components/CustomImage/CustomImage";

export interface LinkDataTypes {
  id: string;
  to: string;
  label: string;
}

export type ContextType = {
  links: LinkDataTypes[];
  page2Content: PagesType[];
  images: ImageType[];
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
    {
      id: uuid(),
      label: "LOGO-3",
      content: <img src={logo3} alt="logo3" />,
    },
    {
      id: uuid(),
      label: "LOGO-4",
      content: <img src={logo4} alt="logo4" />,
    },
    {
      id: uuid(),
      label: "LOGO-5",
      content: <img src={logo5} alt="logo5" />,
    },
  ];
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
    {
      id: uuid(),
      src: p5,
      delay: 6600,
      spacing: 50,
      duration: 2000,
      direction: "up",
    },
  ];
  return (
    <LinkContext.Provider value={{ links, page2Content, images }}>
      {children}
    </LinkContext.Provider>
  );
};
