import { Box } from "@chakra-ui/react";

export const ContainerBox = ({ children }) => {
  return (
    <Box
      as={"div"}
      w={{
        base: "100%",
        s: "480px",
        m: "768px",
        l: "960px",
        xl: "1280px",
      }}
      px={{
        base: "150px",
      }}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};
