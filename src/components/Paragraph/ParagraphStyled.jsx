import { Box, Text } from "@chakra-ui/react";
import { lightColor, mainFont } from "../../styles/variables";

export const ParagraphBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export const Message = ({ text }) => {
  return (
    <Text
      as="p"
      fontFamily={mainFont}
      fontSize="16px"
      lineHeight="1.3"
      fontWeight="400"
      color={lightColor}
    >
      {text}
    </Text>
  );
};
