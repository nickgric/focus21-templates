import { Container } from "../Contrainer";
import { AboutBox, TextBox, AboutImage } from "./AboutStyled";
import { MainTitle } from "../MainTitle";

import { SubTitle } from "../SubTitle/SubTitle";

export const About = () => {
  return (
    <Container>
      <AboutBox>
        <AboutImage />
        <TextBox>
          <MainTitle
            text="On Mission To Help Visionaries And Business Leaders"
            invert
          />
          <SubTitle
            inner
            text="Focus21 is on mission to help visionaries and business leaders stay ahead of the game with powerful technology architecture. Focus21 sets you up with technical readiness so you can focus on what’s more important, SALES!"
            invert
          />
        </TextBox>
      </AboutBox>
    </Container>
  );
};
