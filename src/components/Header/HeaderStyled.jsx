import { Box, Flex, Image } from "@chakra-ui/react";
import { lightColor } from "../../styles/variables";

export const HeaderBox = ({ children }) => {
  return (
    <Flex as="div" py="20px" justifyContent="space-between" alignItems="center">
      {children}
    </Flex>
  );
};

export const BottomLine = () => {
  return <Box as="div" h="1px" w="100%" backgroundColor={lightColor} />;
};

export const Logo = () => {
  return (
    <Image
      as="img"
      src="https://i.ibb.co/rGjJnwg/logo.png"
      alt="Focus21 logo"
      w="200px"
    />
  );
};
