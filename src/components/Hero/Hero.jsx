import { Container } from "../Contrainer";
import { HeroBox, HeroImage, TextBox } from "./HeroStyled";
import { SubTitle } from "../SubTitle";
import { Title } from "../MainTitle";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

export const Hero = () => {
  return (
    <Container>
      <HeroBox>
        <TextBox>
          <SubTitle text="Results-Driven Technology Agency Building Powerful Software Ecosystems" />
          <Title text="We Build Powerful Software Ecosystems For Businesses To Catalyze Growth" />
          <Paragraph text="Focus21 is an innovative provider of top-tier software and digital solutions under its proprietary Build-Operate-Transfer model. Equipped with industry-leading talent and dynamic processes, Focus21 provides fully customized Software models to catapult businesses into success." />
          <Button styleType="main" text="Book FREE Discovery Session" />
        </TextBox>
        <HeroImage />
      </HeroBox>
    </Container>
  );
};
