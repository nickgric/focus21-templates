import { Box } from "@chakra-ui/react";
import { Container } from "../Contrainer";
import { TrendsBox, News, Info } from "./TrendsStyled";
import { SubTitle } from "../SubTitle";
import { Line } from "../Line";

export const Trends = () => {
  return (
    <Container>
      <TrendsBox>
        <Box>
          <SubTitle text="Following Trends:" />
          <Line />
        </Box>
        <News>
          <Info image="https://i.ibb.co/d5yPbKC/1.jpg" link="/trends" />
          <Info image="https://i.ibb.co/TRN10tR/2.jpg" link="/trends" />
          <Info image="https://i.ibb.co/BLBjWw0/3.jpg" link="/trends" />
          <Info image="https://i.ibb.co/3rMK6xM/4.jpg" link="/trends" />
          <Info image="https://i.ibb.co/ZVHghFB/5.jpg" link="/trends" />
          <Info image="https://i.ibb.co/vhGG5y5/6.jpg" link="/trends" />
          <Info image="https://i.ibb.co/94YL3Tt/7.jpg" link="/trends" />
          <Info image="https://i.ibb.co/3s1MJby/8.jpg" link="/trends" />
        </News>
      </TrendsBox>
    </Container>
  );
};
