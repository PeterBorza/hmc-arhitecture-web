import { useContext } from "react";
import { LinkContext } from "../../app/context";
import Page1 from "../Page1";

const Sliders = () => {
  const images = useContext(LinkContext);
  return <Page1 images={images?.images} />;
};

export default Sliders;
