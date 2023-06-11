import { Container } from "../Contrainer";

import { TitleBox, Message } from "./SecondaryTitleStyled";

export const SecondaryTitle = ({ text, invert, accent }) => {
  return (
    <Container>
      <TitleBox>
        <Message text={text} invert={invert} accent={accent} />
      </TitleBox>
    </Container>
  );
};
