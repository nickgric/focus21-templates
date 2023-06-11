import { Box, Flex, Image } from "@chakra-ui/react";
import { lightColor } from "../../styles/variables";

export const WhyWeBox = ({ children }) => {
  return (
    <Box as="div" py="50px">
      <Flex
        as="div"
        backgroundColor={lightColor}
        borderRadius="20px"
        p="30px"
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

export const WhyWeImage = () => {
  return (
    <Image
      as="img"
      src="https://i.ibb.co/xY7gDk6/WhyWe.png"
      alt="Focus21 whywe"
      w="350px"
    />
  );
};
