import { Flex, Image } from "@chakra-ui/react";

export const HeaderBox = ({ children }) => {
  return (
    <Flex as="div" py="20px" justifyContent="space-between" alignItems="center">
      {children}
    </Flex>
  );
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
