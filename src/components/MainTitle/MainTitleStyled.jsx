import { Box, Text } from "@chakra-ui/react";
import { accentFont } from "../../styles/variables";

export const MainTitleBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export const Message = ({ text }) => {
  return (
    <Text
      as="h1"
      fontFamily={accentFont}
      fontSize="32px"
      lineHeight="1.3"
      fontWeight="700"
    >
      {text}
    </Text>
  );
};
