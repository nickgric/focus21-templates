import { Box, Text } from "@chakra-ui/react";
import { lightColor, mainFont, invertColor } from "../../styles/variables";

export const ParagraphBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export const Message = ({ text, center, invert }) => {
  return (
    <Text
      as="p"
      fontFamily={mainFont}
      fontSize="16px"
      lineHeight="1.3"
      fontWeight="400"
      textAlign={center ? "center" : "left"}
      color={invert ? invertColor : lightColor}
    >
      {text}
    </Text>
  );
};
