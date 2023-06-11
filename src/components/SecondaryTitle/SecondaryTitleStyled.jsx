import { Box, Text } from "@chakra-ui/react";
import {
  accentFont,
  invertColor,
  mainColor,
  accentColor,
} from "../../styles/variables";

export const TitleBox = ({ children }) => {
  return (
    <Box as="div" py="25px">
      {children}
    </Box>
  );
};

export const Message = ({ text, invert, accent }) => {
  return (
    <Text
      as="h2"
      fontFamily={accentFont}
      color={(invert && invertColor) || (accent && accentColor) || mainColor}
      fontSize="32px"
      lineHeight="1.3"
      fontWeight="600"
    >
      {text}
    </Text>
  );
};
