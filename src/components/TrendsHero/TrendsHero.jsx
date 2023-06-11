import { Container } from "../Contrainer";
import { HeroBox, HeroImage, TextBox, SideBox } from "./TrendsHeroStyled";
import { SubTitle } from "../SubTitle";
import { MainTitle } from "../MainTitle";
import { Paragraph } from "../Paragraph";

export const TrendsHero = () => {
  return (
    <Container>
      <HeroBox>
        <SideBox>
          <TextBox>
            <SubTitle
              inner
              text="They Are Changing The Interaction With Multimedia Content, Professional Activities, Remote Interaction"
            />
            <MainTitle
              accent
              text="Apple Vision Pro: What You Need To Know About Apple's First Mixed Reality Glasses"
            />
            <Paragraph
              inner
              text='"Today marks the beginning of a new era in the digital world. Just like the Mac introduced us to personal computers and the iPhone to mobile devices, the Apple Vision Pro ushers in the era of spatial computing", said Tim Cook. This is a true revolution that is changing the way we interact with content.'
            />
          </TextBox>
        </SideBox>
        <HeroImage />
      </HeroBox>
    </Container>
  );
};
