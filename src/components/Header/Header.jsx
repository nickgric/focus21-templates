import { HeaderBox, BottomLine, Logo } from "./HeaderStyled";
import { Container } from "../Contrainer";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation />
        </HeaderBox>
      </Container>
      <BottomLine />
    </>
  );
};
