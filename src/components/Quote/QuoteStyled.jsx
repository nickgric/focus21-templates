import { Flex, Text, Icon } from "@chakra-ui/react";
import {
  mainFont,
  invertColor,
  mainColor,
  lightColor,
  accentColor,
} from "../../styles/variables";

export const QuoteBox = ({ children }) => {
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

export const QuoteIcon = () => {
  return (
    <Icon width="60px" height="60px" viewBox="0 0 24 24" fill="none">
      <path
        d="M15.9082 12.3714H20.5982C20.5182 17.0414 19.5982 17.8114 16.7282 19.5114C16.3982 19.7114 16.2882 20.1314 16.4882 20.4714C16.6882 20.8014 17.1082 20.9114 17.4482 20.7114C20.8282 18.7114 22.0082 17.4914 22.0082 11.6714V6.28141C22.0082 4.57141 20.6182 3.19141 18.9182 3.19141H15.9182C14.1582 3.19141 12.8282 4.52141 12.8282 6.28141V9.28141C12.8182 11.0414 14.1482 12.3714 15.9082 12.3714Z"
        fill={accentColor}
      />
      <path
        d="M5.09 12.3714H9.78C9.7 17.0414 8.78 17.8114 5.91 19.5114C5.58 19.7114 5.47 20.1314 5.67 20.4714C5.87 20.8014 6.29 20.9114 6.63 20.7114C10.01 18.7114 11.19 17.4914 11.19 11.6714V6.28141C11.19 4.57141 9.8 3.19141 8.1 3.19141H5.1C3.33 3.19141 2 4.52141 2 6.28141V9.28141C2 11.0414 3.33 12.3714 5.09 12.3714Z"
        fill={accentColor}
      />
    </Icon>
  );
};

export const Message = ({ text, author }) => {
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
        <span> </span>
        <Text
          as="span"
          fontFamily={mainFont}
          fontSize="22px"
          lineHeight="1.3"
          fontWeight="300"
          color={lightColor}
        >
          ({author})
        </Text>
      </Text>
    </>
  );
};
