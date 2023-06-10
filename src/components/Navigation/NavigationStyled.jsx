import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { mainFont, accentColor } from "../../styles/variables";

export const NavigationBox = ({ children }) => {
  return (
    <Flex as="ul" justifyContent="center" alignItems="center" gap="20px">
      {children}
    </Flex>
  );
};

export const NavigationLink = ({ link, text, active }) => {
  return (
    <Text
      as="li"
      listStyleType="none"
      fontFamily={mainFont}
      fontWeight={active ? "800" : "600"}
      _hover={{ color: accentColor }}
    >
      <Link to={link}>{text}</Link>
    </Text>
  );
};
