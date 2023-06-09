import { Box, Flex, Image } from "@chakra-ui/react";
import { accentColor } from "../../styles/variables";

export const AboutBox = ({ children }) => {
  return (
    <Box as="div" py="50px">
      <Flex
        as="div"
        backgroundColor={accentColor}
        borderRadius="20px"
        p="40px"
        gap="20px"
      >
        {children}
      </Flex>
    </Box>
  );
};

export const TextBox = ({ children }) => {
  return (
    <Flex flexDirection="column" justifyContent="center" gap="20px" as="div">
      {children}
    </Flex>
  );
};

export const AboutImage = () => {
  return (
    <Image
      as="img"
      src="https://i.ibb.co/SP1kQ0C/about.png"
      alt="Focus21 hero"
      w="350px"
    />
  );
};
