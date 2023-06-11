import { Box, Text } from "@chakra-ui/react";
import { mainFont, invertColor, mainColor } from "../../styles/variables";

export const SubTitleBox = ({ children }) => {
  return (
    <Box as="div" pt="25px">
      {children}
    </Box>
  );
};

export const Message = ({ text, invert }) => {
  return (
    <Text
      as="p"
      fontFamily={mainFont}
      fontSize="22px"
      lineHeight="1.3"
      fontWeight="600"
      color={invert ? invertColor : mainColor}
    >
      {text}
    </Text>
  );
};
