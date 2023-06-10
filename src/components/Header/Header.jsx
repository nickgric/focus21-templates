import { HeaderBox, Logo } from "./HeaderStyled";
import { Container } from "../Contrainer";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation />
        </HeaderBox>
      </Container>
    </>
  );
};
