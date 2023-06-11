import { Container } from "../Contrainer";
import { HeroBox, HeroImage, TextBox, SideBox } from "./CasesHeroStyled";
import { SubTitle } from "../SubTitle";
import { MainTitle } from "../MainTitle";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

export const CasesHero = () => {
  return (
    <Container>
      <HeroBox>
        <SideBox>
          <TextBox>
            <SubTitle
              inner
              text="Creating a safety culture can dramatically reduce risks and improve engagement in large-scale distribution networks and trucking fleets"
            />
            <MainTitle
              accent
              text="Walmart enhances safety through employee education and action"
            />
            <Paragraph
              inner
              text="How do you cultivate a culture of safety that significantly lowers risk, decreases accidents and injuries along with their associated costs, and boosts employee involvement, when you manage one of the world's largest distribution networks and private trucking fleets?"
            />
          </TextBox>
        </SideBox>
        <HeroImage />
      </HeroBox>
    </Container>
  );
};
