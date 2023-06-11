import { Flex, Text } from "@chakra-ui/react";
import {
  accentFont,
  accentColor,
  mainFont,
  mainColor,
} from "../../styles/variables";

export const NumbersBox = ({ children }) => {
  return (
    <Flex
      as="div"
      py="25px"
      justifyContent="space-between"
      alignItems="center"
      gap="20px"
    >
      {children}
    </Flex>
  );
};

export const Item = ({ value, text }) => {
  return (
    <Flex as="div" gap="20px" alignItems="center">
      <Text
        as="h2"
        fontFamily={accentFont}
        color={accentColor}
        fontSize="56px"
        lineHeight="1.3"
        fontWeight="700"
      >
        {value}
      </Text>
      <Text
        as="p"
        fontFamily={mainFont}
        fontSize="22px"
        lineHeight="1.3"
        fontWeight="600"
        color={mainColor}
      >
        {text}
      </Text>
    </Flex>
  );
};
