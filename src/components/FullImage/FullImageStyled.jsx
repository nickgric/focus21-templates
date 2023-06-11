import { Image } from "@chakra-ui/react";
import { lightColor } from "../../styles/variables";

export const ImageStyled = ({ image }) => {
  return (
    <Image
      as="img"
      src={image}
      borderRadius="0px 20px 20px 0px"
      boxShadow={`10px 0px 0px 0px ${lightColor}`}
      w="100%"
    />
  );
};
