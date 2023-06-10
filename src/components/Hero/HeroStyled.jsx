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

export const HeroImage = () => {
  return (
    <Image
      as="img"
      src="https://i.ibb.co/6w3fLrT/hero.png"
      alt="Focus21 hero"
      boxShadow={`20px 0px 0px 0px ${accentColor}`}
      w="35%"
    />
  );
};
