import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { lightColor, accentColor, mainFont } from "../../styles/variables";

export const TrendsBox = ({ children }) => {
  return (
    <Flex as="div" py="50px" flexDirection="column" gap="25px">
      {children}
    </Flex>
  );
};

export const Filter = ({ children }) => {
  return (
    <Flex
      as="ul"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="15px"
    >
      {children}
    </Flex>
  );
};

export const Category = ({ name, active }) => {
  return (
    <Text
      as="li"
      listStyleType="none"
      fontFamily={mainFont}
      fontWeight={active ? "800" : "600"}
      _hover={{ color: accentColor }}
    >
      <Link>{name}</Link>
    </Text>
  );
};

export const News = ({ children }) => {
  return (
    <Flex
      as="ul"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap="20px"
    >
      {children}
    </Flex>
  );
};

export const Info = ({ image, link }) => {
  return (
    <Link to={link}>
      <Box
        as="li"
        listStyleType="none"
        w="200px"
        h="200px"
        backgroundImage={image}
        backgroundPosition="center"
        backgroundSize="cover"
        boxShadow={`10px 0px 0px 0px ${lightColor}`}
        borderRadius="0px 20px 20px 0px"
        _hover={{ boxShadow: `10px 0px 0px 0px ${accentColor}` }}
      ></Box>
    </Link>
  );
};
