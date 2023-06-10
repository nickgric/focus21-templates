import { Container } from "../Contrainer";
import { AboutBox, TextBox, AboutImage } from "./AboutStyled";
import { MainTitle } from "../MainTitle";

import { SubTitle } from "../SubTitle/SubTitle";

export const About = () => {
  return (
    <Container>
      <AboutBox>
        <TextBox>
          <MainTitle text="About Us" invert />
          <SubTitle
            text="Focus21 is on a mission to help visionaries and business leaders stay ahead of the game with powerful technology architecture. Focus21 sets you up with technical readiness so you can focus on what’s more important, SALES!"
            invert
          />
        </TextBox>
        <AboutImage />
      </AboutBox>
    </Container>
  );
};
