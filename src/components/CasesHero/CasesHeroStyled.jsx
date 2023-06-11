import { Flex, Image } from "@chakra-ui/react";
import { accentColor } from "../../styles/variables";

export const HeroBox = ({ children }) => {
  return (
    <Flex as="div" py="50px" gap="20px">
      {children}
    </Flex>
  );
};

export const TextBox = ({ children }) => {
  return (
    <Flex as="div" flexDirection="column" gap="20px">
      {children}
    </Flex>
  );
};

export const SideBox = ({ children }) => {
  return (
    <Flex
      as="div"
      flexDirection="column"
      justifyContent="space-between"
      gap="20px"
    >
      {children}
    </Flex>
  );
};

export const HeroImage = () => {
  return (
    <Image
      as="img"
      src="https://i.ibb.co/dBrCvtP/1.jpg"
      alt="Focus21 hero"
      borderRadius="0px 20px 20px 0px"
      boxShadow={`10px 0px 0px 0px ${accentColor}`}
      w="350px"
    />
  );
};
