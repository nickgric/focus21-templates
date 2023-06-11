import { Flex, Text, Icon } from "@chakra-ui/react";
import { mainFont, mainColor, accentColor } from "../../styles/variables";

export const FactBox = ({ children }) => {
  return (
    <Flex
      as="div"
      py="25px"
      justifyContent="center"
      alignItems="start"
      gap="20px"
    >
      {children}
    </Flex>
  );
};

export const FactIcon = () => {
  return (
    <Icon width="60px" height="60px" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6"
        stroke={accentColor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.87441 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.87441 15.7802Z"
        fill={accentColor}
      />
    </Icon>
  );
};

export const Message = ({ text }) => {
  return (
    <>
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
    </>
  );
};
