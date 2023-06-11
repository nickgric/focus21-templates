import { Container } from "../Contrainer";
import { WhyWeBox, TextBox, WhyWeImage } from "./WhyWeStyled";
import { MainTitle } from "../MainTitle";

import { SubTitle } from "../SubTitle/SubTitle";

export const WhyWe = () => {
  return (
    <Container>
      <WhyWeBox>
        <TextBox>
          <MainTitle
            text="Team Of Professionals Who Excel In What They Do"
            invert
          />
          <SubTitle
            inner
            text="With a team of professionals who excel in what they do, Focus21 uniquely combines software talent, dynamic business processes, and a flair for innovation that delivers RESULTS."
            invert
          />
        </TextBox>
        <WhyWeImage />
      </WhyWeBox>
    </Container>
  );
};
