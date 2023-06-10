import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { lightColor, accentColor } from "../../styles/variables";

export const TrendsBox = ({ children }) => {
  return (
    <Flex as="div" py="50px" flexDirection="column" gap="20px">
      {children}
    </Flex>
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
