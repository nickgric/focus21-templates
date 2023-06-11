import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const HeaderBox = ({ children }) => {
  return (
    <Flex as="div" py="20px" justifyContent="space-between" alignItems="center">
      {children}
    </Flex>
  );
};

export const Logo = () => {
  return (
    <Link to="/">
      <Image
        as="img"
        src="https://i.ibb.co/rGjJnwg/logo.png"
        alt="Focus21 logo"
        w="200px"
      />
    </Link>
  );
};
