import { Box, Text } from "@chakra-ui/react";
import { mainFont } from "../../styles/variables";

export const SubTitleBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export const Message = ({ text }) => {
  return (
    <Text
      as="p"
      fontFamily={mainFont}
      fontSize="22px"
      lineHeight="1.3"
      fontWeight="400"
    >
      {text}
    </Text>
  );
};
