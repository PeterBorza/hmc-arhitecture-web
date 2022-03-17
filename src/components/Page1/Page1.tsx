import CustomImage from "../CustomImage";

import { ImageType } from "../CustomImage/CustomImage";

export interface Page1Props {
  images: ImageType[] | undefined;
}

const Page1 = ({ images }: Page1Props) => {
  return (
    <>
      {images?.map(image => (
        <CustomImage key={`image-${image.id}`} {...image} />
      ))}
    </>
  );
};

export default Page1;
