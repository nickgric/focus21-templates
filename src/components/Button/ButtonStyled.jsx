import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { accentColor, invertColor, mainColor } from "../../styles/variables";

export const MainButton = ({ text, link }) => {
  return (
    <Button
      as={Link}
      to={link}
      backgroundColor={accentColor}
      borderColor={accentColor}
      borderRadius="20px"
      maxW="300px"
      borderWidth="2px"
      color={invertColor}
      _hover={{ backgroundColor: "#FFFFFF", color: mainColor }}
    >
      {text}
    </Button>
  );
};
